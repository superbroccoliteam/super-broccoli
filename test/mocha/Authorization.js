const chai = require('chai'),
    chaihttp = require('chai-http'),
    mongoose = require('mongoose'),
    app = require('../../app'),

    umodelUser = require('../../models/User'),
    should = chai.should();

chai.use(chaihttp);
describe('Registration',function(){
   let user;
   beforeEach(function () {
       user ={
           firstName: 'Test',
           lastName: 'Test',
           email: 'test.test@test.be',
           nickname: 'test123',
           password: 'Test-123'
       }
   });
   after(function (done) {
       umodelUser.remove({email: user.email},done);
   });
   it('Should return 400 if no data is provided.',function (done) {
        chai.request('http://localhost:3000')
            .post('/authorization/register')
            .end((err,res)=>{
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.message.should.be.a('array');
                done();
            });
    });
    it('Should return 400 if no first name is provided.', function(done){
        delete user.firstName;
        chai.request('http://localhost:3000')
            .post('/authorization/register')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.message.should.be.a('array');
                done();
            });
    });
    it('Should return 400 if no last name is provided.', function(done){
        delete user.lastName;
        chai.request('http://localhost:3000')
            .post('/authorization/register')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.message.should.be.a('array');
                done();
            });
    });
    it('Should return 400 if no email is provided.', function(done){
        delete user.email;
        chai.request('http://localhost:3000')
            .post('/authorization/register')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.message.should.be.a('array');
                done();
            });
    });
    it('Should return 400 if no password is provided.', function(done){
        delete user.password;
        chai.request('http://localhost:3000')
            .post('/authorization/register')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.message.should.be.a('array');
                done();
            });
    });
    it('Should return 400 if no nickname is provided.', function(done){
        delete user.nickname;
        chai.request('http://localhost:3000')
            .post('/authorization/register')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.message.should.be.a('array');
                done();
            });
    });
    it('Should return 400 if first name length is shorter than 2.', function(done){
        user.firstName = 'G';
        chai.request('http://localhost:3000')
            .post('/authorization/register')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.message.should.be.a('array');
                done();
            });
    });

    it('Should return 400 if first name length is greater than 40.', function(done){
        user.firstName = 'sdfhdshgkdsfgkdhfjmldsjfjdsijfmoesjfiushfkdshgffdkgljsjdfhjhjhgfgghuuollmlkjk';
        chai.request('http://localhost:3000')
            .post('/authorization/register')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.message.should.be.a('array');
                done();
            });
    });
    it('Should return 400 if last name length is shorter than 2.', function(done){
        user.lastName = '5';
        chai.request('http://localhost:3000')
            .post('/authorization/register')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.message.should.be.a('array');
                done();
            });
    });

    it('Should return 400 if last name length is greater than 40.', function(done){
        user.lastName = 'sdfhdshgkdsfgkdhfjmldsjfjdsijfmoesjfiushfkdshgffdkgljsjdfhjhjhgfgghuuollmlkjk';
        chai.request('http://localhost:3000')
            .post('/authorization/register')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.message.should.be.a('array');
                done();
            });
    });
    it('Should return 400 if nickname length is shorter than 2.', function(done){
        user.nickname = 'p';
        chai.request('http://localhost:3000')
            .post('/authorization/register')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.message.should.be.a('array');
                done();
            });
    });

    it('Should return 400 if nickname length is greater than 40.', function(done){
        user.nickname = 'sdfhdshgkdsfgkdhfjmldsjfjdsijfmoesjfiushfkdshgffdkgljsjdfhjhjhgfgghuuollmlkjk';
        chai.request('http://localhost:3000')
            .post('/authorization/register')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.message.should.be.a('array');
                done();
            });
    });
    it('Should return 400 if password does not contain a number', function (done){
        user.password = "Wachtwoord";
        chai.request('http://localhost:3000')
            .post('/authorization/register')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.message.should.be.a('array');
                done();
            });
    });

    it('Should return 400 if password does not contain at least 1 uppercase letter', function (done){
        user.password = "appelmoes";
        chai.request('http://localhost:3000')
            .post('/authorization/register')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.message.should.be.a('array');
                done();
            });
    });

    it('Should return 400 if password does not contain at least 1 lowercase letter', function (done){
        user.password = "CAPSLOCK";
        chai.request('http://localhost:3000')
            .post('/authorization/register')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.message.should.be.a('array');
                done();
            });
    });

    it('Should return 400 if password is shorter than 6 characters.', function (done){
        user.password = "NmCt3";
        chai.request('http://localhost:3000')
            .post('/authorization/register')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.message.should.be.a('array');
                done();
            });
    });
    it('Should return 500 if a user his email is already registered.', function(done){
        user.email = 'admin@admin.be';
        chai.request('http://localhost:3000')
            .post('/authorization/register')
            .send(user)
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });
    });

    it('Should return 201 if a user succesfully registered.', function(done){
        chai.request('http://localhost:3000')
            .post('/authorization/register')
            .send(user)
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    });
});
describe('Authentication', function() {
    let login;
    beforeEach(function() {
        login = {
            email: 'admin@admin.be',
            password: 'Password-1'
        };
        let token = '';
    });

    it('Should return 400 if no data is provided', function(done) {
        chai.request('http://localhost:3000')
            .post('/authorization/login')
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    it('Should return 400 if no email is provided', function(done){
        delete login.email;
        chai.request('http://localhost:3000')
            .post('/authorization/login')
            .send(login)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    it('Should return 400 if no password is provided', function(done) {
        delete login.password;
        chai.request('http://localhost:3000')
            .post('/authorization/login')
            .send(login)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });

    it('Should return 401 if email does not exist in database.', function(done) {
        login.email = 'jens.meire@gmail.com';
        chai.request('http://localhost:3000')
            .post('/authorization/login')
            .send(login)
            .end((err, res) => {
                res.should.have.status(401);
                done();
            });
    });

    it('Should return 400 if a wrong password is provided.', function(done){
        login.password = 'Appelmoest-420';
        chai.request('/authorization/login')
            .post('/authenticate')
            .send(login)
            .end((err, res) => {
                res.should.have.status(401);
                done();
            });
    });

    it('Should return 200 if user succesfully logged in.', function (done){
        chai.request('http://localhost:3000')
            .post('/authorization/login')
            .send(login)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('email');
                res.body.should.have.property('token');
                res.body.should.have.property('firstName');
                res.body.should.have.property('_id');
                res.body.should.have.property('nickname');
                res.body.should.have.property('lastName');
                this.token = res.body.token;
                done();
            });
    });

    it('Should return 200 if user succesfully logged out.', function (done){
        chai.request('http://localhost:3000')
            .post('/authorization/logout')
            .set('Authorization', this.token)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});
