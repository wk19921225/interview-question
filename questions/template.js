
const template = '{{name}}很厉害，才{{age}}岁。'
const data = {name: "sdf", age: 12}

function templateStr(str, context){
    return str.replace(/{{(.+?)}}/g, (match, value) => {
        return context[value.trim()] ? context[value.trim()] : match;
    })
}

const t = templateStr(template, data)

console.log(t)
