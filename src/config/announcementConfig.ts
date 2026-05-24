import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "Don't fall in love.Rise in Love.",

	// 公告内容
	content: "真爱催人奋进喵~",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: false,
		// 链接文本
		text: "了解更多",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
