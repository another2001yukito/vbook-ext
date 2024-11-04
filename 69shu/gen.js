function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get("https://www.69shu.biz/"+url+"/"+page+"/").html();

    var next = doc.select("#pagelink").select("a.next").attr('href').split('_')[1].replace('/','');

    const el = doc.select(".section-cols ul li")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var booKId = e.select(".s2 a").first().attr("href").split('/')[4];
        var fol = booKId.slice(0, -3);
        data.push({
            name: e.select(".s2 a").first().text(),
            link: e.select(".s2 a").first().attr("href"),
            cover: 'https://static.69shu.biz/static/nocover.png',
            description: e.select(".s4").text(),
            host: "https://www.69shu.biz"
        })
    }

    return Response.success(data, next)
}
