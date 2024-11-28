const Players=[
    {
      "name": "Messi",
      "photo": "https://cdn.sofifa.net/players/158/023/25_120.png",
      "position": "RW",
      "nationality": "https://cdn.sofifa.net/flags/ar.png",
      "club": "https://cdn.sofifa.net/meta/team/239235/120.png",
      "rating": 93,
      "shooting": 92,
      "passing": 91,
      "dribbling": 95,
      "defending": 35
    },
    {
      "name": "Ronaldo",
      "photo": "https://cdn.sofifa.net/players/020/801/25_120.png",
      "position": "ST",
      "nationality": "https://cdn.sofifa.net/flags/pt.png",
      "club": "https://cdn.sofifa.net/meta/team/2506/120.png",
      "rating": 93,
      "shooting": 92,
      "passing": 91,
      "dribbling": 95,
      "defending": 35
    },
    {
      "name": "Donnarumma",
      "photo": "https://cdn.sofifa.net/players/230/621/25_120.png",
      "position": "GK",
      "nationality": "https://cdn.sofifa.net/flags/it.png",
      "club": "https://cdn.sofifa.net/meta/team/591/120.png",
      "rating": 93,
      "diving": 92,
      "handling": 91,
      "kicking": 95,
      "reflexes": 35
    }
]

localStorage.setItem("Players",JSON.stringify(Players));