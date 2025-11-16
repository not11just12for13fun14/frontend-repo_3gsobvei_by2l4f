import React from 'react'

const rows = [
  ['9:00 – 9:45 AM','Reporting & Verification','Team registration and verification'],
  ['9:45 – 10:00 AM','Opening Ceremony + Rules','Welcome address and rules explanation'],
  ['10:00 AM – 1:00 PM','Round 1 Working Hours','Development phase with mentor support'],
  ['1:00 – 2:00 PM','Lunch Break','Lunch break for all participants'],
  ['2:00 – 5:00 PM','Round 1 Continues','Development continues'],
  ['4:00 – 5:00 PM','Jury Round 1 Evaluation','First round jury evaluation'],
  ['5:00 – 6:00 PM','Break','Rest and refreshment break'],
  ['6:00 – 8:00 PM','Round 2 Working Hours','Second round development phase'],
  ['8:00 – 9:00 PM','Dinner Break','Dinner break for all participants'],
  ['9:00 PM – 1:00 AM','Round 2 Continues','Second round development continues'],
  ['12:00 – 1:00 AM','Jury Round 2 Evaluation','Second round jury evaluation'],
  ['1:00 – 2:00 AM','Fun Activities','Fun activities and relaxation'],
  ['2:00 – 8:00 AM','Round 3 Working Hours','Final round development phase'],
  ['8:00 – 9:00 AM','Breakfast Break','Breakfast for all participants'],
  ['8:00 – 10:00 AM','Jury Round 3 Evaluation','Third round jury evaluation'],
  ['10:30 AM','Finalists Announced','Announcement of finalist teams'],
  ['11:00 AM – 1:00 PM','Final Round Presentations (Batch 1)','Batch 1'],
  ['1:00 – 2:00 PM','Lunch for Finalists','Lunch for finalists'],
  ['2:00 – 4:00 PM','Final Round Presentations (Batch 2)','Batch 2'],
  ['5:00 PM','Prize Distribution & Closing','Prize distribution & closing ceremony'],
]

export default function Schedule(){
  return (
    <div className="mx-auto max-w-6xl px-4 mt-10">
      <h1 className="text-3xl font-bold" style={{fontFamily:'Space Grotesk'}}>Detailed Schedule</h1>
      <div className="mt-6 rounded-2xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-white/10 sticky top-0">
              <tr className="text-left">
                <th className="p-3">Time</th>
                <th className="p-3">Activity</th>
                <th className="p-3">Description</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r,i)=> (
                <tr key={i} className="odd:bg-white/[0.03]">
                  <td className="p-3">{r[0]}</td>
                  <td className="p-3">{r[1]}</td>
                  <td className="p-3">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="mt-4 text-white/70 text-sm">“Schedule is subject to minor changes. All updates will be communicated by email and on-spot announcements.”</p>
    </div>
  )
}
