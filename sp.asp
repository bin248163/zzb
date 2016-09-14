<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="zh-CN" lang="zh-CN">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>网站首页</title>
		<meta name="description" content="描述" />
		<meta name="keywords" content="关键词英文逗号分隔" />
		<link href="images/favicon.ico" type="image/x-icon" rel="shortcut icon" />
		<style type="text/css">
			.sp {
				position: relative;
				width: 500px;
			}
			
			.p-w {
				width: 100%;
				position: absolute;
				z-index: 1;
				bottom: 0;
				height: 30px;
			}
			
			.p1 {
				width: 20px;
				height: 20px;
				float: left;
				padding-left: 10px;
			}
			
			.p2 {
				width: 20px;
				height: 20px;
				background: #fff;
				float: left;
				margin: 0 10px;
			}
			
			.px {
				width: 4px;
				margin: 0 3px;
				height: 100%;
				background: #fff;
				float: left;
			}
		</style>
	</head>

	<body>
		<div class="sp">
			<video width="1000" height="560" controls="controls" id="video">
				<source src="finger.ogv" type="video/ogg">
				<source src="finger.mp4" type="video/mp4"> 
					还用IE8？
			</video>

			<!--<div class="p-w">
				<div id="b1" class="p1">
					<div class="px"></div>
					<div class="px"></div>
				</div>
				<div id="b2" class="p2"></div>
				<div id="b3" class="sp1"></div>
			</div>-->
		</div>

	</body>
	<script>
		window.onload = function() {
			var player = document.getElementById('video');
			var b1 = document.getElementById('b1');
			var b2 = document.getElementById('b2');
			var b3 = document.getElementById('b3');
			b1.onclick = function() {
				player.play();
			}
			b2.onclick = function() {
				player.Pause();
			}
			b3.onclick = function() {
				player.Stop();
			}
		}
	</script>

</html>