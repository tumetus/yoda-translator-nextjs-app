import axios from 'axios';

export default async function handler(req, res) {
    let { text } = req.body;

    await axios
      .post("https://api.funtranslations.com/translate/yoda.json", { text })
      .then(translateResponse => {
        const { translated } = translateResponse.data.contents;
        res.status(200).json({ translated });
      })
      .catch(err => {
        console.log(err.message);
        res.status(500).json({ msg: "Something went wrong."});
      });
}