function execute() {
    return Response.success([
        { title: "全部分类", input: "booklist/class/0", script: "gen.js" },
        { title: "言情小说", input: "booklist/class/3", script: "gen.js" },
        { title: "玄幻魔法", input: "booklist/class/1", script: "gen.js" },
        { title: "修真武侠", input: "booklist/class/2", script: "gen.js" },
        { title: "穿越时空", input: "booklist/class/11", script: "gen.js" },
        { title: "都市小说", input: "booklist/class/9", script: "gen.js" },
        { title: "历史军事", input: "booklist/class/4", script: "gen.js" },
        { title: "游戏竞技", input: "booklist/class/5", script: "gen.js" },
        { title: "科幻空间", input: "booklist/class/6", script: "gen.js" },
        { title: "悬疑惊悚", input: "booklist/class/7", script: "gen.js" },
        { title: "同人小说", input: "booklist/class/8", script: "gen.js" },
        { title: "官场职场", input: "booklist/class/10", script: "gen.js" },
        { title: "青春校园", input: "booklist/class/12", script: "gen.js" },
    ]);
}
