// 导航条
$(function() {
	// Link切换 效果
	$('#myNavLink>ul>li').click(function() {
		$(this).addClass('active').siblings('li').removeClass('active');
	});
});