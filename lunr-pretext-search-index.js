var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "DefFunc",
  "level": "1",
  "url": "DefFunc.html",
  "type": "Section",
  "number": "1.1",
  "title": "Definition of a Function",
  "body": " Definition of a Function  A function is a rule that assigns to each input to exactly one output. The set of all inputs is called the domain of the function, and the set of all outputs is called the range of the function.  A function can be represented in several ways, including a table of values, a graph, or an equation. The most common representation is an equation, which describes the relationship between the input and output variables.  For example, the function f(x) = 2x + 3 assigns to each input x a unique output f(x). The domain of this function is all real numbers, and the range is also all real numbers.   "
},
{
  "id": "Linear",
  "level": "1",
  "url": "Linear.html",
  "type": "Chapter",
  "number": "2",
  "title": "LO2: Linear Functions",
  "body": " LO2: Linear Functions  Content of the new chapter.  "
},
{
  "id": "LinearFunctions",
  "level": "1",
  "url": "LinearFunctions.html",
  "type": "Chapter",
  "number": "3",
  "title": "LO3: Composition &amp; Transformation",
  "body": " LO3: Composition & Transformation  Content of the new chapter.  "
},
{
  "id": "Exp",
  "level": "1",
  "url": "Exp.html",
  "type": "Chapter",
  "number": "4",
  "title": "LO4: Exponential Functions",
  "body": " LO4: Exponential Functions  Content of the new chapter.  "
},
{
  "id": "InvLogs",
  "level": "1",
  "url": "InvLogs.html",
  "type": "Chapter",
  "number": "5",
  "title": "LO5: Inverses &amp; Logarithms",
  "body": " LO5: Inverses & Logarithms  Content of the new chapter.  "
},
{
  "id": "Quad",
  "level": "1",
  "url": "Quad.html",
  "type": "Chapter",
  "number": "6",
  "title": "LO6: Quadratic Functions",
  "body": " LO6: Quadratic Functions  Content of the new chapter.  "
},
{
  "id": "HO",
  "level": "1",
  "url": "HO.html",
  "type": "Chapter",
  "number": "7",
  "title": "LO7: Higher Order Polynomials",
  "body": " LO7: Higher Order Polynomials  Content of the new chapter.  "
},
{
  "id": "Rational",
  "level": "1",
  "url": "Rational.html",
  "type": "Chapter",
  "number": "8",
  "title": "LO8: Rational Functions",
  "body": " LO8: Rational Functions  Content of the new chapter.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
