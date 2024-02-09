import "dotenv/config.js"

const externalapis = process.env.DATA_LINKS.split(',')

export function ReturnLatestUSDValues() {
    let usdvalues = []
    for (let i = 0; i < externalapis.length; i++) {
        let url = externalapis[i]
        fetch(url).then(res => res.json()).then(data => usdvalues.push(data))
    }
    return usdvalues
}

