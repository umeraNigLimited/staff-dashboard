-- Umera Departments
CREATE TABLE umera_departments (
    department_id VARCHAR(50) PRIMARY KEY,
    department_name VARCHAR(255) UNIQUE NOT NULL,
    department_description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--Functionn to Check for Department Update
CREATE OR REPLACE FUNCTION on_updated_at_column_update()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON umera_departments
FOR EACH ROW
EXECUTE FUNCTION on_updated_at_column_update();

-- Staffs Email 
CREATE TABLE umera_staff_email (
    email_id SERIAL PRIMARY KEY,
    staff_email VARCHAR(255) UNIQUE NOT NULL,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON umera_staff_email
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();

-- Table for user authentication details (login credentials)
CREATE TABLE signUp_staff (
    id SERIAL PRIMARY KEY,
    staff_id VARCHAR(255) UNIQUE NOT NULL,
    staff_fullname VARCHAR(255) NOT NULL,
    staff_official_email VARCHAR(255) UNIQUE NOT NULL,
    staff_personal_email VARCHAR(255) UNIQUE NOT NULL,
    staff_department VARCHAR(50) REFERENCES umera_departments(department_id),
    staff_role VARCHAR(255) NOT NULL,
    staff_password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



-- Staff information and user profile data
CREATE TABLE staff (
    staff_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    department_id INT REFERENCES departments(department_id),
    join_date DATE NOT NULL,
    position VARCHAR(255),
    profile_picture_url VARCHAR(255),
    leave_status VARCHAR(50) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE staff (
    staff_id VARCHAR(50) PRIMARY KEY,
    last_name VARCHAR(255) NOT NULL,
    other_name VARCHAR(255) NOT NULL,
    personal_email VARCHAR(255) UNIQUE NOT NULL,
    office_email VARCHAR(255) UNIQUE NOT NULL,
    department_id VARCHAR(50) REFERENCES umera_departments(department_id),
    join_date DATE NOT NULL,
    position VARCHAR(255),
    staff_role VARCHAR(50) CHECK (leave_status IN ('staff', 'nysc', 'intern')) DEFAULT 'active',
    profile_picture_url VARCHAR(255),
    leave_status VARCHAR(50) CHECK (leave_status IN ('active', 'on leave', 'pending approval', 'suspended')) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE staff_documents (
    document_id SERIAL PRIMARY KEY,
    staff_id VARCHAR(50) REFERENCES staff(staff_id) ON DELETE CASCADE,
    document_type VARCHAR(50) CHECK (document_type IN (
        'Employment_Letter', 'Guarantor_Form', 'Medical_Report', 
        'Certificates', 'Leave_Form', 'Queries_and_Responses', 
        'Confidentiality_Agreement', 'Curriculum_Vitae'
    )),
    document_url VARCHAR(255),
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



-- Department data for department-specific communication
CREATE TABLE departments (
    department_id SERIAL PRIMARY KEY,
    department_name VARCHAR(100) UNIQUE NOT NULL
);

-- Table to handle files specific to each user
CREATE TABLE staff_files (
    file_id SERIAL PRIMARY KEY,
    staff_id INT REFERENCES staff(staff_id) ON DELETE CASCADE,
    file_name VARCHAR(255) NOT NULL,
    file_url VARCHAR(255) NOT NULL,
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tasks for each staff member
CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,
    staff_id VARCHAR(50) REFERENCES staff(staff_id) ON DELETE CASCADE,
    description TEXT NOT NULL,
    priority VARCHAR(50) CHECK (priority IN ('low', 'medium', 'high')),
    due_date DATE,
    status VARCHAR(50) CHECK (status IN ('to_do', 'in_progress', 'completed')) DEFAULT 'to_do',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP
);

CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,
    staff_id INT REFERENCES staff_signUp(id) ON DELETE CASCADE,
    description TEXT,
    priority VARCHAR(50) CHECK (priority IN ('low', 'medium', 'high')),
    due_date DATE,
    status VARCHAR(50) CHECK (status IN ('to_do', 'in_progress', 'completed')) DEFAULT 'to_do',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP
);

-- Productivity tracking: counts completed tasks for each user
CREATE TABLE productivity (
    productivity_id SERIAL PRIMARY KEY,
    staff_id INT REFERENCES staff(staff_id) ON DELETE CASCADE,
    tasks_completed INT DEFAULT 0,
    productivity_score DECIMAL(5, 2) -- could be a calculated score
);

-- Reports sent to the Admin
CREATE TABLE reports (
    report_id SERIAL PRIMARY KEY,
    staff_id INT REFERENCES staff(staff_id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    attachment_url VARCHAR(255),
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Notifications table for admin messages to staff
CREATE TABLE notifications (
    notification_id SERIAL PRIMARY KEY,
    recipient_id INT REFERENCES staff(staff_id) ON DELETE CASCADE,
    message TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    read_status BOOLEAN DEFAULT FALSE
);

-- Chat or messages between staff members
CREATE TABLE messages (
    message_id SERIAL PRIMARY KEY,
    sender_id INT REFERENCES staff(staff_id) ON DELETE SET NULL,
    recipient_id INT REFERENCES staff(staff_id) ON DELETE SET NULL,
    channel_id INT REFERENCES channels(channel_id),
    content TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Channels for group messages, department channels, or specific document threads
CREATE TABLE channels (
    channel_id SERIAL PRIMARY KEY,
    channel_name VARCHAR(255) NOT NULL,
    department_id INT REFERENCES departments(department_id) -- for department-based channels
);

-- Department-based communication for specific document threads
CREATE TABLE department_documents (
    document_id SERIAL PRIMARY KEY,
    document_name VARCHAR(255) NOT NULL,
    department_id INT REFERENCES departments(department_id) ON DELETE CASCADE,
    document_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Communication threads tied to specific documents
CREATE TABLE document_threads (
    thread_id SERIAL PRIMARY KEY,
    document_id INT REFERENCES department_documents(document_id) ON DELETE CASCADE,
    channel_id INT REFERENCES channels(channel_id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Leave requests and query records for tracking employee queries and leave applications
CREATE TABLE leave_requests (
    request_id SERIAL PRIMARY KEY,
    staff_id INT REFERENCES staff(staff_id) ON DELETE CASCADE,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    leave_description TEXT,
    status VARCHAR(50) CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE queries (
    query_id SERIAL PRIMARY KEY,
    staff_id INT REFERENCES staff(staff_id) ON DELETE CASCADE,
    query_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    query_content TEXT NOT NULL,
    response TEXT,
    resolved BOOLEAN DEFAULT FALSE
);


-- Table for user authentication details (login credentials)
CREATE TABLE signUp_staff(
    id SERIAL PRIMARY KEY,
    staff_fullname VARCHAR(255) NOT NULL,
    staff_official_email VARCHAR(255) UNIQUE NOT NULL,
    staff_personal_email VARCHAR(255) UNIQUE NOT NULL,
    staff_department INT REFERENCES department(department_id),
    staff_role VARCHAR(255) NOT NULL,
    staff_password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_admin BOOLEAN DEFAULT FALSE
);



CREATE TABLE auth_users (
    auth_user_id SERIAL PRIMARY KEY,
    staff_id INT REFERENCES staff(staff_id) ON DELETE CASCADE,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL, -- Store hashed passwords
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);

-- Roles table to define roles like Admin, Staff, etc.
CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    role_name VARCHAR(50) UNIQUE NOT NULL
);

-- Link each user to a role
CREATE TABLE user_roles (
    user_role_id SERIAL PRIMARY KEY,
    auth_user_id INT REFERENCES auth_users(auth_user_id) ON DELETE CASCADE,
    role_id INT REFERENCES roles(role_id) ON DELETE CASCADE
);

-- Optional: Table for session management and tokens
CREATE TABLE user_sessions (
    session_id SERIAL PRIMARY KEY,
    auth_user_id INT REFERENCES auth_users(auth_user_id) ON DELETE CASCADE,
    token VARCHAR(255) UNIQUE NOT NULL, -- Used for access tokens
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP
);


--Inserting Data 
INSERT INTO umera_departments (department_id, department_name) VALUES
('UMeRA-DPT-RD', 'Research & Development'),
('UMeRA-DPT-MD', 'Media'),
('UMeRA-DPT-AC', 'Accounting'),
('UMeRA-DPT-IT', 'Information Technology'),
('UMeRA-DPT-PF', 'Portfolio'),
('UMeRA-DPT-LG', 'Legal'),
('UMeRA-DPT-AD', 'Admin');


