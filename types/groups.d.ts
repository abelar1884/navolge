interface Group {
    id: number
    name: string
    workingMeeting: Date
    timeEvents: Array<TimeEvent>
}

interface GroupDB {
    id: number
    name: string
    working_meeting: Date
    time_events: Array<TimeEvent>
}

interface TimeEvent {
    date: Date
    groupId: number
}

type GroupOption = {
    id?: number
    name: string
    workingMeeting?: Date
    timeEvents?: Array<TimeEvent>
}