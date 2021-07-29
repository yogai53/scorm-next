export default async function handler(req, res) {
  try{
    const aws = await fetch("http://localhost:3000/scorm/index_lms_html5.html")
    const text = await aws.text()
    console.log("------r----")
    console.log(text)
    res.writeHead(200, { 'Content-Type':'text/html'});
    res.end(text);
    // res.status(200).send(html)
    
  }
  catch(error){
    console.log("---------e---------")
    console.log(error)
    res.status(200).json({ name: 'Error' })
  }
}