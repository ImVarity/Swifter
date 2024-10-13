'use client'

export default function Page() {
    var name = ""
    if (typeof window !== undefined) {
        name = localStorage.getItem("name") || ""
    }

    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}