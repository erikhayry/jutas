interface Comic {
    "panel": string,
    "file_name": string,
    "coords": {
        "x": number,
        "y": number,
        "w": number,
        "h": number
    },
    "description": string
    "narration"?: string
    "dialogs"?: {
        text: string
        person: string
    }[]
    "quotes"?: string
}