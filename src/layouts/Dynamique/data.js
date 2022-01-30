export const service = []

export const form = {
    link: "",
    fields: [
        {
            type: "text",
            name: "email",
            label: "Votre mail",
            obligate: true,
            id:1
        },
        {
            type: "password",
            name: "password",
            label: "Votre mot de passe",
            obligate: true,
            id:2
        },
        {
            type: "checkbox",
            name: "remember",
            label: "Se souvenir de moi",
            obligate: true,
            id:5
        },
        {
            type: "select",
            name: "option",
            label: "Votre option",
            obligate: true,
            options: [
                {
                    value: 1,
                    label: "1"
                },
                {
                    value: 2,
                    label: "2"
                },
                {
                    value: 3,
                    label: "3"
                },
                ],
            id:3
        },

    ]
}