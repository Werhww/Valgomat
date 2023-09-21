export type partyNames = "Rødt" | 'Sosialistisk Venstreparti' | 'Miljøpartiet De Grønne' | 'Arbeiderpartiet' | 'Venstre' | 'Senterpartiet' | 'Kristelig Folkeparti' | 'Fremskrittspartiet' | 'Høyre'
export type keys = 'for' | 'neutral' | 'against'


export const questions = [
    {
        question : "Ønsker å øke skattene for høyinntektspersoner og store selskaper",
        for: {
            'Rødt': 10,
            'Sosialistisk Venstreparti': 10,
            'Miljøpartiet De Grønne': 9,
            'Arbeiderpartiet': 8,
            'Venstre': 5,
        },
        neutral: {
            'Senterpartiet': 10,
            'Kristelig Folkeparti': 9,
            'Venstre': 5,
        },
        against: {
            'Fremskrittspartiet': 10,
            'Høyre': 9,
        }
    },
    {
        question : "Favoriserer økt offentlig finansiering av helsetjenester",
        for: {
            'Rødt': 10,
            'Sosialistisk Venstreparti': 10,
            'Miljøpartiet De Grønne': 9,
            'Arbeiderpartiet': 8,
            'Venstre': 5,
        },
        neutral: {
            'Senterpartiet': 10,
            'Kristelig Folkeparti': 9,
            'Venstre': 5,
        },
        against: {
            'Fremskrittspartiet': 10,
            'Høyre': 9,
        }
    },
    {
        question : "Favoriserer økt offentlig finansiering av helsetjenester",
        for: {
            'Rødt': 10,
            'Sosialistisk Venstreparti': 10,
            'Miljøpartiet De Grønne': 9,
            'Arbeiderpartiet': 8,
            'Venstre': 5,
        },
        neutral: {
            'Senterpartiet': 10,
            'Kristelig Folkeparti': 9,
            'Venstre': 5,
        },
        against: {
            'Fremskrittspartiet': 10,
            'Høyre': 9,
        }
    },
    {
        question : "Bør det være mindre støtte for dyre elbiler for å fremme bruk av mer rimelige alternativer?",
        for: {
            'Rødt': 10,
            'Sosialistisk Venstreparti': 10,
            'Miljøpartiet De Grønne': 9,
            'Arbeiderpartiet': 8,
            'Venstre': 5,
        },  
        neutral: {
            'Senterpartiet': 10,
            'Kristelig Folkeparti': 9,
            'Venstre': 5,
        },
        against: {
            'Fremskrittspartiet': 10,
            'Høyre': 9,
        }
    }, 
]

export const partys = {
    "Arbeiderpartiet" : {
        image: "/parties/AP.png",
        score: 0
    },
    "Høyre" : {
        image: "/parties/H.png",
        score: 0
    }, 
    "Senterpartiet" : {
        image: "/parties/SP.png",
        score: 0
    },
    "Fremskrittspartiet" : {
        image: "/parties/FRP.png",
        score: 0
    },
    "Sosialistisk Venstreparti" : {
        image: "/parties/SV.png",
        score: 0
    }, 
    "Rødt" : {
        image: "/parties/R.png",
        score: 0
    },
    "Venstre" : {
        image: "/parties/V.png",
        score: 0
    }, 
    "Miljøpartiet De Grønne" : {
        image: "/parties/MDG.png",
        score: 0
    },
    "Kristelig Folkeparti" : {
        image: "/parties/KRF.png",
        score: 0
    }
}

export type questionTypes = {
    question: string,
    for: {
        [key:string] : number
    },
    neutral: {
        [key:string]: number
    },
    against: {
        [key:string]: number
    }
}