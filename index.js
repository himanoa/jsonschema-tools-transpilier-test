const JsonSchemaTranspiler = require("@json-schema-tools/transpiler").default
const { readFileSync } = require("fs")

const schema = JSON.parse(readFileSync("./qiita.json").toString())

console.log(JSON.stringify(schema))

const transpiler = new JsonSchemaTranspiler(schema)

console.log(transpiler.toTypescript())
