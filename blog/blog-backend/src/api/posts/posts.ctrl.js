/*import Post from '../../models/post';

export const write = async ctx => {
    const {title, body, tags} = ctx.request.body;
    const post = new Post({
        title,
        body,
        tags,
    });
    try{
        await post.save();
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};
export const list = async ctx => {
    try{
        const posts = await Post.find().exec();
        ctx.body = posts;
    } catch (e) {
        ctx.throw(500, e);
    }
};
export const read = ctx => {

};
export const remove = ctx => {

};
export const update = ctx => {

};*/

let postId =1;

const posts = [
    {
        id:1,
        title: '제목',
        body: '내용',

    },
];
//포스트 작성
exports.write = ctx => {
    const {title, body} = ctx.request.body;
    postId += 1;
    const post = {id: postId, title, body};
    posts.push(post);
    ctx.body = post;
};
//포스트 목록 조회

exports.list = ctx => {
    ctx.body = posts;
};

//특정 포스트 조회
exports.read = ctx => {
    const {id} = ctx.params;
    //주어진 id값으로 포스트를 찾는다. 파라미터로 받아 온 값은 문자열 형식 숫자로 변환하거나 p.id값을 문자열로
    const post = posts.find(p=> p.id.toString() == id);
    if(!post){
        ctx.status = 404;
        ctx.body ={
            message: 'post is not exist',
        };
        return;
    }
    ctx.body = post;
};

//특정 포스트 제거
exports.remove = ctx => {
    const {id} = ctx.params;
    const index = posts.findIndex(p=>p.id.toString()==id);
    //포스트가 없으면 오류 반환
    if(index === -1){
        ctx.status = 404;
        ctx.body = {
            message:'post is not exist',
        };
        return;
    }
    posts.splice(index, 1);
    ctx.status = 204;

};

//포스트 수정
exports.replace = ctx =>{
    //put 메서드는 전체 포스트 정보를 입력하여 데이터를 통쨰로 교체할때 사용
    const {id} = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    if(index === -1){
        ctx.status = 404;
        ctx.body = {
            message: 'post is not exist',
        };
        return;
    }

    //전체 객체를 덮어씌우려 객체를 새로 만들자
    posts[index] = {
        id,
        ...ctx.request.body,
    };
    ctx.body = posts[index];
};

exports.update = ctx => {
    const {id} = ctx.params;
    const index = posts.findIndex(p=>p.id.toString() === id);
    if(index === -1){
        ctx.status = 404;
        ctx.body ={
            message:'post is not exist',
        };
        return;
    }
    //덮어 씌우기
    posts[index] = {
        ...posts[index],
        ...ctx.request.body,
    };
    ctx.body = posts[index];
};