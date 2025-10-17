interface Comic {
    "panel": string,
    "file_name": string,
    "coords_percent": {
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