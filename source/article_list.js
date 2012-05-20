enyo.kind({
  name: "ArticleList",
  kind: enyo.Control,
  components: [
    { tag: "div", name: "articleList" }
  ],

  addArticle: function(inResult) {
    console.log(inResult);
    this.createComponent({
      kind: Article,
      container: this.$.articleList,
      data: inResult.data,
      thing_kind: inResult.kind
    });
    
    this.$.articleList.render();
  },
    
  fetch: function() {
    //this.$.getWeather.call({location: "Sunnyvale CA"});
    
    var params = {
    };
    		
		return new enyo.Ajax({url: 'http://www.reddit.com/.json'}).response(this, "processResponse").go({blah: 'true'});
    
    //this.$.getArticles.call();
  },
  
  processResponse: function(inSender, inResponse) {
    console.log(inSender)
    console.log(inResponse)
    
    this.handleLoadArticlesResponse(inResponse);
  },
  
  handleLoadArticlesResponse: function(json) {
    var data, items, json, length;
    
    data = json.length > 0 ? json[1].data : json.data;
    items = data.children;
    
    _.each(items, (function(item) {
      item.can_unsave = item.data.saved ? false : true;
      this.addArticle(item);
    }).bind(this));
    
    // if (items.length > 0) {
    //   this.controller.get('puller').show();
    // } else {
    //   this.controller.get('puller').hide();
    // }
    // if (this.articles.items.length === 0) {
    //   return this.controller.get('list').mojo.noticeAddedItems(0, [null]);
    // }
  }
  
  //    var request = new enyo.xhr.request({
  //      url: "http://www.sodao.com/showtime/gt?pcs_id=9&rnd=&quot; + Math.random()",
  //      method: "GET",
  //    //callback: //this.addGirl(responseText)
  //    });
  //    mainApp.pageArea.write(request.responseXML);
  //    //enyo.job("loadGirlLoop",this.loadGirl(),60000);
  // }
});
