enyo.kind({
  name: "Article",
  kind: enyo.Control,
  classes: "article",
  tag: "div",

  components: [
    { tag: "div", name: "comment_column", classes: "column", components: [{tag: "a", name: "comments_link", components: [{ tag: "div", name: "comment_counter", classes: "comment_counter", ontap: "commentCounterTap"}]}]},
    { tag: "div", name: "vote_desc", classes: "vote_desc"},
    { tag: "div", name: "title_holder", components: [{tag: "a", name: "icon_link", components: [{ tag: "img", name: "icon", classes: "reddit_thumbnail", ontap: "iconTap"}]},{ tag: "div", name: "title", classes: "comment_description"}]},
    { tag: "div", name: "description", classes: "article_desc"}
  ],
  
  iconTap: function() {
    console.log("icon tap");
  },
  
  commentCounterTap: function() {
    console.log("comment tap");
  },
    
  // <div class="thing-container" id="#{data.name}">
  //   <div class="thing reddit_article">
  //     <div class="column">
  //       <div class="comment_counter">#{data.num_comments}</div>
  //     </div>
  // 
  //     <div class="vote_desc"><b>#{voteFormatted}</b></div>
  //     <div class="comment_description">#{-thumbnailFormatted}#{-data.title}</div>
  //     <div class="article_desc">#{tagFormatted}</div>
  //   </div>
  // </div>
  
  create: function() {
    this.inherited(arguments);
    this.iconChanged();
    this.titleChanged();
    this.descriptionChanged();
    this.commentCounterChanged();
  },
  
  titleChanged: function() {
    this.$.title.setContent(this.data.title);
  },

  descriptionChanged: function() {
    var descriptionFormatted = "";
    
    descriptionFormatted = (this.data.ups - this.data.downs) + " points in " + this.data.subreddit + " by " + this.data.author;
    
    this.$.description.setContent(descriptionFormatted);
  },
  
  commentCounterChanged: function() {
    this.$.comments_link.setAttributes({href: 'http://reddit.com' + this.data.permalink, target: '_blank'});
    this.$.comment_counter.setContent(this.data.num_comments);
  },
  
  iconChanged: function() {
    this.$.icon_link.setAttributes({href: this.data.url, target: '_blank'});
    this.$.icon.setSrc(this.iconFormatter());
  },
  
  iconFormatter: function() {
    var linky, _ref;
    
    if ((this.thing_kind !== 't1') && (this.thing_kind !== 't3')) {
      return '';
    }
    
    var image_link = null;
    
    if ((this.data.thumbnail != null) && (this.data.thumbnail !== "")) {
      image_link = this.data.thumbnail;
      
      if (image_link.indexOf('/static/') !== -1) {
        image_link = 'http://reddit.com' + image_link;
      }
      
      if (image_link === 'self' || image_link === 'nsfw' || image_link === 'default') {
        image_link = "./images/" + image_link + "-thumbnail.png";
      }
    }
    
    if (this.data.url != null) {
      linky = Linky.parse(this.data.url);
      
      switch (linky.type) {
        case 'image':
          if (image_link == null) {
            image_link = './images/picture.png';
          }
          return image_link;
        case 'youtube_video':
          if (image_link == null) {
            image_link = './images/youtube.png';
          }
          return image_link;
        case 'web':
          if (image_link == null) {
            image_link = './images/web.png';
          }
          return image_link;
      }
    }
    return "";
  }
  
});
