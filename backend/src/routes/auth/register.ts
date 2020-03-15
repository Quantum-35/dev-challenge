const Register = (req, res) => {
    console.log('Hello Bodysffs..',req.body)
    return res.status(200).send({
        success: true,
        message: 'success'
    })
}
export default Register;
