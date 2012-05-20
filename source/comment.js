enyo.kind({
  name: "Comment",
  kind: enyo.Control,
  classes: "comment",
  tag: "div",

  components: [
    { tag: "div", name: "comment_desc", classes: "comment_desc"},
    { tag: "div", name: "tag"},
    { tag: "div", name: "vote_desc", classes: "vote_desc"},
    { tag: "div", name: "comment_spacer", classes: "comment_spacer"},
    { tag: "div", name: "thumbnail"},
    { tag: "div", name: "easylinks"},
    { tag: "div", name: "title"},
    { tag: "div", name: "body"},
    { tag: "div", name: "comment_hider"}
  ],
  
  // <div class="thing-container" id="#{data.name}">
  //   <div class="thing #{cssclassFormatted}" style="margin-left:#{indentFormatted}px;">
  //     <div class="comment_desc"><font class="article_desc_author">#{data.author}</font> #{scoreFormatted} #{timeFormatted}</div>
  //     <div class="#{tagClassFormatted}">&nbsp;&nbsp;OP</div>
  //     <div class="vote_desc"><b>#{voteFormatted}</b></div>
  //     <div class="comment_spacer">&nbsp;</div>
  //     <div>#{-thumbnailFormatted}</div>
  //     <div>#{-easyLinksHTML}</div>
  //     <div><strong>#{-data.title}</strong></div>
  //     <div>#{-bodyFormatted}</div>
  //     <div><font color='red'>#{hidingCommentsFormatted}</font></div>
  //   </div>
  // </div>
    
});
