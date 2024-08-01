import { CircleCheckIcon, RefreshCwIcon, ThumbsUpIcon } from "lucide-react";

import React from 'react'

const DesempenhoTabs = () => {
  return (
    <div className="flex flex-1 mx-20">
        <aside className="w-64 bg-[#2d3748] p-4">
          <nav className="space-y-2">
            <a href="#" className="block bg-[#0072bc] text-white px-4 py-2 rounded">
              Home
            </a>
            <a href="#" className="block text-[#0072bc] px-4 py-2">
              Progress
            </a>
            <a href="#" className="block text-[#0072bc] px-4 py-2">
              Star Board
            </a>
            <a href="#" className="block text-[#fdb913] px-4 py-2">
              Assessments
            </a>
            <a href="#" className="block text-[#fdb913] px-4 py-2">
              Workbooks
            </a>
            <a href="#" className="block text-[#fdb913] px-4 py-2">
              Report Cards
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-4">
          <div className="flex items-center gap-4 mb-4">
            <img src="/placeholder.svg" alt="Avatar" className="h-16 rounded-full" />
            <div>
              <h1 className="text-2xl font-bold">Jean Amaral</h1>
              <p className="text-[#8dc63f]">Grade 8</p>
            </div>
            <div className="ml-auto text-center">
              <div className="text-[#fdb913] text-2xl font-bold">0</div>
              <div className="text-[#fdb913]">Earned Today</div>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <CircleCheckIcon className="h-6 w-6 text-[#0072bc]" />
              <span>Completed 0 of 113 Grade 8 skills</span>
            </div>
            <a href="#" className="ml-auto text-[#0072bc]">
              View all »
            </a>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <CircleCheckIcon className="h-6 w-6 text-[#0072bc]" />
              <span>Completed 0 of 30 Grade 8 standards</span>
            </div>
            <a href="#" className="ml-auto text-[#0072bc]">
              View all »
            </a>
          </div>
          <div className="flex items-center justify-between bg-[#2d3748] p-4 rounded mb-4">
            <h2 className="text-xl font-bold">Suggested Skill</h2>
            <RefreshCwIcon className="h-6 w-6 text-[#0072bc]" />
            <a href="#" className="text-[#0072bc]">
              View More »
            </a>
          </div>
          <div className="flex items-center justify-between bg-[#1f2937] p-4 rounded mb-4">
            <div className="flex items-center gap-2">
              <ThumbsUpIcon className="h-6 w-6 text-[#0072bc]" />
              <span>No assigned work! Try one of our suggested games below</span>
            </div>
            <button className="bg-[#0072bc] text-white px-4 py-2 rounded">Free Play</button>
          </div>
          <div className="bg-[#2d3748] p-4 rounded">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Latest Progress</h2>
              <RefreshCwIcon className="h-6 w-6 text-[#0072bc]" />
            </div>
            <table className="w-full bg-[#1f2937] rounded">
              <thead>
                <tr className="bg-[#2d3748]">
                  <th className="p-2 text-left">Skill</th>
                  <th className="p-2 text-left">Level</th>
                  <th className="p-2 text-left">Attempted</th>
                  <th className="p-2 text-left">Correct</th>
                  <th className="p-2 text-left">Time</th>
                  <th className="p-2 text-left">Last Played</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">8.19 Ratios and Proportions</td>
                  <td className="p-2">1</td>
                  <td className="p-2">10</td>
                  <td className="p-2 text-[#8dc63f]">100%</td>
                  <td className="p-2">1:45</td>
                  <td className="p-2">2 minutes ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
  )
}

export default DesempenhoTabs
