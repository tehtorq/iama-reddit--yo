enyo.kind({
    name: "Hello",
    kind: enyo.Control,
    components: [
        {name: "hello", content: "Hello From Enyo", ontap: "helloTap"},
        {tag: "hr"}
    ],
    helloTap: function() {
        this.$.hello.addStyles("color: red");
    }
});


enyo.kind({
    name: "Frontpage",
    kind: enyo.Control,
    components: [
{name: "layout2", showing: false, kind: "FittableColumns", classes: "enyo-fit", components: [
				{kind: "FittableRows", style: "width: 300px;", components: [
					{fit: true},
					{kind: "onyx.Toolbar", components: [
						{kind: "onyx.Button", content: "1"}
					]}
				]},
				{kind: "FittableRows", style: "width: 300px; box-shadow: -6px 0px 6px rgba(0,0,0,0.3);", components: [
					{fit: true, style: ""},
					{kind: "onyx.Toolbar", components: [
						{kind: "onyx.Button", content: "2"}
					]}
				]},
				{kind: "FittableRows", fit: true, style: "box-shadow: -6px 0px 6px rgba(0,0,0,0.3);", components: [
					{fit: true, classes: "fitting-color"},
					{kind: "onyx.Toolbar", components: [
						{kind: "onyx.Button", content: "3"}
					]}
				]}
			]},
      ],
      helloTap: function() {
          this.$.hello.addStyles("color: red");
      }
});