import React from 'react'

export default function Timeline(){
  return (
    <div className="mx-auto max-w-4xl px-4 mt-10">
      <h1 className="text-3xl font-bold" style={{fontFamily:'Space Grotesk'}}>Hackathon Timeline</h1>

      <div className="mt-8 space-y-8">
        <TimelineBlock>
{`Hackathon Timeline
10:00 AM – 5:00 PM

Round 1
Initial development, ideation & prototype building
(Includes 1:00 – 2:00 PM lunch break)
Jury evaluation from 4:00 – 5:00 PM

6:00 PM – 1:00 AM

Round 2
Deep development phase & feature implementation
(Includes 8:00 – 9:00 PM dinner break)
Jury evaluation from 12:00 AM – 1:00 AM
Fun activity from 1:00 – 2:00 AM

2:00 AM – 8:00 AM

Round 3
Final development, polishing & submission preparation
Jury evaluation from 8:00 – 10:00 AM

11:00 AM – 4:00 PM

Final Round
Team presentations
Batch 1: 11:00 AM – 1:00 PM
Lunch: 1:00 – 2:00 PM
Batch 2: 2:00 – 4:00 PM

5:00 PM

Results
Prize distribution & closing ceremony`}
        </TimelineBlock>
      </div>
    </div>
  )
}

function TimelineBlock({children}){
  return (
    <pre className="whitespace-pre-wrap rounded-2xl p-6 bg-white/5 border border-white/10 text-white/90 leading-relaxed">{children}</pre>
  )
}
