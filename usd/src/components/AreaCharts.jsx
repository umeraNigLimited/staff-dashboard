'use client'
import React, { useState } from 'react'
import { productivityData } from '../../productivity'
import { AreaChart, Area, ResponsiveContainer, YAxis, XAxis, CartesianGrid , Tooltip, Legend } from 'recharts'

function AreaCharts() {
    const [produc, setProduc] = useState(productivityData)

  return (
    <ResponsiveContainer width='100%'  height='100%'>
        <AreaChart height={300} data={produc} margin={{
    top: 20, right: 0, bottom: 20, left: 0,
  }}>
        <defs>
          <linearGradient id="colorProductivity" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#34c759" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#34c759" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorFocusHours" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Area type='monotone' dataKey={"productivity"} name="Productivity" stroke="#8884d8" fill="url(#colorProductivity)"/>
        <Area type='monotone' dataKey={"tasks"} name="Tasks" stroke="#8884d8" fill="url(#colorTasks)"/>
        <Area
          type="monotone"
          dataKey="focusHours"
          name="Focus Hours"
          stroke="#82ca9d"
          fill="url(#colorFocusHours)"
        />
        </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaCharts