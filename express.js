var express = require("express");
var app = express();
var loremIpsum = require("lorem-ipsum");
var port = 8000;

app.listen(port, function() {
  console.log("You are running on port...", port);
});

app.get("/", express.static("public"));

app.get("/lorem/", function(req, res) {
  res.send(
    loremIpsum({
      count: 3, // Number of words, sentences, or paragraphs to generate.
      units: "paragraphs", // Generate words, sentences, or paragraphs.
      sentenceLowerBound: 5, // Minimum words per sentence.
      sentenceUpperBound: 15, // Maximum words per sentence.
      paragraphLowerBound: 4, // Minimum sentences per paragraph.
      paragraphUpperBound: 7, // Maximum sentences per paragraph.
      format: "html", // Plain text or html
      random: Math.random, // A PRNG function. Uses Math.random by default
      suffix: "\n" // The character to insert between paragraphs. Defaults to default EOL for your OS.
    })
  );
});

app.get("/lorem/:num", function(req, res) {
  res.send(
    loremIpsum({
      count: req.params.num, // Number of words, sentences, or paragraphs to generate.
      units: "paragraphs", // Generate words, sentences, or paragraphs.
      sentenceLowerBound: 5, // Minimum words per sentence.
      sentenceUpperBound: 15, // Maximum words per sentence.
      paragraphLowerBound: 4, // Minimum sentences per paragraph.
      paragraphUpperBound: 7, // Maximum sentences per paragraph.
      format: "html", // Plain text or html
      random: Math.random, // A PRNG function. Uses Math.random by default
      suffix: "\n" // The character to insert between paragraphs. Defaults to default EOL for your OS.
    })
  );
});
