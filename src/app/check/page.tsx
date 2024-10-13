'use client'

import { useEffect, useState } from "react";

export default function Page() {
    const [name, setName] = useState<string>("")

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
          let n = localStorage.getItem("name") || "";
          setName(n)
        }
      }, []);

    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}