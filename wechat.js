$(function(){
	/*添加菜单*/
	if($(".menu .main_ul li").length == "1"){
		$(".menu .main_ul li.main").css({
			width:"274px",
			height:"48px",
			margin:"0 auto",
			borderColor:"#44B549"
		}).find("a").css({color:"#44B549"});
		$(".menu .main_ul li.main").on("click",function(){
		$(this).css({
			width:"136px",
			float:"right"
		}).before("<li>菜单名称</li>").find("a").html("").css({
			width:"14px",
			height:"14px",
			marginTop:"20px",
			background:"url(index.png)left top no-repeat"
		});
		$(".menu .main_ul li").css({
			width:"136px",
			height:"48px",
			color:"#44B549"
		});
		$(".menu .submenu ul").eq(0).css({
			display:"block",
			width:"136px",
			height:"48px"
		})
		if($(".menu .main_ul li").length == "2"){
			$(".menu .main_ul li.main").css({borderColor:"#E7E7EB"}).siblings().css({
				borderColor:"#44B549",
				color:"#44B549"
			}).before("<ul class='list_ul'></ul>");
			$(".menu .main_ul li.main").on("click",function(){
				$(this).css({
					width:"90px",
					float:"right"
				});
				$(".menu .main_ul li").css({
					width:"90px"
				});
				$(".menu .main_ul li").eq(0).css({
					borderColor:"#E7E7EB",
					color:"#636364"
				})
			});
			// $(".menu .submenu .submenu_first .head_li").on("click",function(){
			// 	$(".menu .submenu .submenu_first").after("<li>子菜单名称</li>");
			// })
		}
		if($(".menu .main_ul li").length == "3"){
			$(".menu .main_ul li.main").css({borderColor:"#E7E7EB"}).siblings().css({
				borderColor:"#44B549",
				color:"#44B549"
			});
			$(".menu .main_ul li").eq(0).css({
				borderColor:"#E7E7EB",
				color:"#636364"
			});
			$(".menu .main_ul li").eq(1).css({
				borderColor:"#44B549",
				color:"#44B549"
			});
			$(".menu .submenu ul").eq(1).css({
				display:"block"
			}).siblings().css({
				display:"none"
			})
			$(".menu .main_ul li").eq(0).on("click",function(){
				$(this).css({
					borderColor:"#44B549",
					color:"#44B549"
				}).siblings().css({
					borderColor:"#E7E7EB",
					color:"#636364"
				})
				$(".menu .submenu ul").eq(0).css({
					display:"block"
				}).find("li").css({
					width:"90px",
					height:"48px"
				})
				$(".menu .submenu ul").eq(1).css({
					display:"none"
				})
			})
			$(".menu .main_ul li").eq(1).on("click",function(){
				$(this).css({
					borderColor:"#44B549",
					color:"#44B549"
				}).siblings().css({
					borderColor:"#E7E7EB",
					color:"#636364"
				})
				$(".menu .submenu ul").eq(1).css({
					display:"block"
				}).siblings().css({
					display:"none"
				})
			})
		}
		if($(".menu .main_ul li").length == "4"){
			$(".menu .main_ul li.main").css({borderColor:"#E7E7EB"}).siblings().css({
				borderColor:"#44B549"
			});
			$(".menu .submenu ul").eq(0).css({
				display:"none",
			}).find("li").css({
				width:"90px",
				height:"48px"
			});
			$(".menu .submenu ul").eq(1).css({
				display:"none"
			});
			$(".menu .submenu ul").eq(2).css({
				display:"block"
			});
			$(".menu .main_ul li").eq(0).css({
				borderColor:"#E7E7EB",
				color:"#636364"
			});
			$(".menu .main_ul li").eq(1).css({
				borderColor:"#E7E7EB",
				color:"#636364"
			});
			$(".menu .main_ul li").on("click",function(){
				$(".menu .main_ul li").eq($(this).index()-1).css({
					color:"#44B549",
					borderColor:"#44B549"
				}).siblings().css({
					color:"#636364",
					borderColor:"#E7E7EB"
				})
				$(".menu .submenu ul").eq($(this).index()-1).css({
					display:"block",
					width:"90px",
					height:"48px"
				}).siblings().css({
					display:"none"
				})
			})
		}
		})
	}
	$(".sort").on("mouseover",function(){
		$(this).css({
			background:"#E7E7EB",
			cursor:"pointer"
		})
	}).on("mouseout",function(){
		$(this).css({
			background:"#fff",
		})
	})
	$(".preview").on("mouseover",function(){
		$(this).css({
			background:"#E7E7EB",
			cursor:"pointer"
		})
	}).on("mouseout",function(){
		$(this).css({
			background:"#fff",
		})
	})

	$(".save").on("mouseover",function(){
		$(this).css({
			background:"#2F9833",
			cursor:"pointer"
		})
	}).on("mouseout",function(){
		$(this).css({
			background:"#44B549"
		})
	})
})