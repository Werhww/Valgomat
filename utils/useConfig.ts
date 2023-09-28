export type partyNames = keyof typeof partys
export type keys = 'for' | 'neutral' | 'against'


export const questions: questionTypes[] = [
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
        question : "Bør det være mindre støtte for dyre elbiler for å fremme bruk av mer rimelige alternativer?",
        for: {
            'Rødt' : 8,
            'Arbeiderpartiet' : 9,
            'Senterpartiet' : 9,
            'Sosialistisk Venstreparti' : 9,
            'Høyre':10,
            'Fremskrittspartiet' : 10,
        },  
        neutral: {
        },
        against: {
            'Kristelig Folkeparti': 10,
            'Miljøpartiet De Grønne': 10,
            'Venstre': 8,
        }
    }, 
    {
        question : "Bør skattene for de rike og store bedrifter økes for å finansiere velferdstjenester?",
        for: {
            'Arbeiderpartiet': 10,
            'Miljøpartiet De Grønne': 10,
            'Rødt': 8,
        },  
        neutral: {
            'Sosialistisk Venstreparti': 8,
            'Senterpartiet': 8,
            'Venstre': 8,
        },
        against: {
            'Høyre': 10,
            'Fremskrittspartiet': 8,
            'Kristelig Folkeparti': 6,
        }
    }, 
    {
        question : "Senke skattene for dem med gjennomsnitt og lave inntekter. De rikeste skal betale mer formuesskatt.",
        for: {
            'Arbeiderpartiet': 10,
            'Miljøpartiet De Grønne': 10,
            'Sosialistisk Venstreparti': 10,
            'Rødt': 8,
            'Senterpartiet': 5,
            'Venstre': 5,
        },  
        neutral: {
            'Senterpartiet': 3,
            'Venstre': 3,
            'Kristelig Folkeparti': 5,
        },
        against: {
            'Høyre': 10,
            'Fremskrittspartiet': 8,
        }
    }, 
    {
        question : "Bør vi jobbe for å fase ut oljeindustrien som en del av klimainnsatsen?",
        for: {
            'Venstre': 10,
            'Sosialistisk Venstreparti': 8,
            'Kristelig Folkeparti': 10,
            'Miljøpartiet De Grønne': 12,
            'Rødt': 9,
        },  
        neutral: {
        },
        against: {
            'Arbeiderpartiet': 9,
            'Høyre': 9,
            'Fremskrittspartiet': 10,
            'Senterpartiet': 7,
        }
    }, 
    {
        question : "Bør fraværsgrensen på skoler fjernes for å redusere presset på elever?",
        for: {
            'Venstre': 10,
            'Miljøpartiet De Grønne': 9,
            'Senterpartiet': 7,
        },  
        neutral: {
            'Fremskrittspartiet': 8,
            'Sosialistisk Venstreparti': 8,
            'Kristelig Folkeparti': 7,
            'Rødt': 9,
        },
        against: {
            'Arbeiderpartiet': 9,
            'Høyre': 9,
            'Miljøpartiet De Grønne': 9,
        }
    }, 
    {
        question : "Endre fraværsgrensen for å gi mer fleksibilitet i for foreldremeldinger og fag med mindre timer.",
        for: {
            'Arbeiderpartiet': 9,
            'Senterpartiet': 10,
            'Venstre': 7,
            'Miljøpartiet De Grønne': 6,
            'Kristelig Folkeparti': 9,
        },  
        neutral: {
            'Fremskrittspartiet': 7,
            'Sosialistisk Venstreparti': 7,
            'Rødt': 7,
        },
        against: {
            'Høyre': 10,
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