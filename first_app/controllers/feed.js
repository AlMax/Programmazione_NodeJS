const { validationResult } = require('express-validator');

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
    const errors = validationResult(req);
    if(!(errors.isEmpty())){
        return res.status(400).json({
            message: 'Not validated!',
            error: errors.array()
        });
    }

    const title = req.body.title;
    res.status(201).json({ //.status(201) può essere omesso
        message: 'Success!',
        title: title,
    });
};