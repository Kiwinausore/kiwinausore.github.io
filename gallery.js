const IMAGE_LIST = [
	{
		url: "url(https://i.imgur.com/c6EHSAY.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/hiiXO29.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/Ch5tF5E.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/4ovVvla.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/QCDBoal.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/2QIspQ1.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/c4iXoQv.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/wciyPVD.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/VRo0Wxu.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/uzgdxhY.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/FObq3ie.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/8Rr8yGr.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/78wrIUL.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/e6fC9Wh.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/xAsq5Kv.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/1WzajVn.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/OXmDaLg.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/y2YjRcu.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/GPUMcnz.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/UrjjdzJ.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/AGcAQyF.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/wkl6nBw.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/saVehAC.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/q3AjIpX.jpg)",
		titre: "",
		desc: ""
	},
	{
		url: "url(https://i.imgur.com/nn4ubeP.jpg)",
		titre: "",
		desc: ""
	}
];

function fillGallery(container) {
	for (const image of IMAGE_LIST) {
		container.innerHTML += `<button style="background-image: ${image.url}"><div>${image.titre}</div></button>`;
	}
}

$(document).ready(function () {
	fillGallery(document.getElementById("gallery-container"));
});