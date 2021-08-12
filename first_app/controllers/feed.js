// controllore che definisce la risposta
exports.getProva = (req,res,next) => {
    res.json({
        posts: [
            {
                title: 'hello title',
                description: 'hello description'
            },
            {
                title: 'hello title2',
                description: 'hello description2'
            }
        ],
        test: 'testiamo',
    });
};

exports.createProva = (req,res,next) => {
    const title = req.body.title;
    res.status(201).json({ //.status(201) può essere omesso
        message: 'Success!',
        title: title,
    });
};