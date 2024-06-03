module.exports = [
  {
    "name": "base",
    "selectors": [
      "html.light"
    ],
    "mediaQuery": "@media (prefers-color-scheme: light)",
    "theme": {
      "colors": {
        "slate": {
          "50": "rgba(248, 250, 252 / <alpha-value>)",
          "100": "rgba(241, 245, 249 / <alpha-value>)",
          "200": "rgba(226, 232, 240 / <alpha-value>)",
          "300": "rgba(203, 213, 225 / <alpha-value>)",
          "400": "rgba(148, 163, 184 / <alpha-value>)",
          "500": "rgba(100, 116, 139 / <alpha-value>)",
          "600": "rgba(71, 85, 105 / <alpha-value>)",
          "700": "rgba(51, 65, 85 / <alpha-value>)",
          "800": "rgba(30, 41, 59 / <alpha-value>)",
          "900": "rgba(15, 23, 42 / <alpha-value>)",
          "950": "rgba(2, 6, 23 / <alpha-value>)"
        },
        "gray": {
          "50": "rgba(249, 250, 251 / <alpha-value>)",
          "100": "rgba(243, 244, 246 / <alpha-value>)",
          "200": "rgba(229, 231, 235 / <alpha-value>)",
          "300": "rgba(209, 213, 219 / <alpha-value>)",
          "400": "rgba(156, 163, 175 / <alpha-value>)",
          "500": "rgba(107, 114, 128 / <alpha-value>)",
          "600": "rgba(75, 85, 99 / <alpha-value>)",
          "700": "rgba(55, 65, 81 / <alpha-value>)",
          "800": "rgba(31, 41, 55 / <alpha-value>)",
          "900": "rgba(17, 24, 39 / <alpha-value>)",
          "950": "rgba(3, 7, 18 / <alpha-value>)"
        },
        "zinc": {
          "50": "rgba(250, 250, 250 / <alpha-value>)",
          "100": "rgba(244, 244, 245 / <alpha-value>)",
          "200": "rgba(228, 228, 231 / <alpha-value>)",
          "300": "rgba(212, 212, 216 / <alpha-value>)",
          "400": "rgba(161, 161, 170 / <alpha-value>)",
          "500": "rgba(113, 113, 122 / <alpha-value>)",
          "600": "rgba(82, 82, 91 / <alpha-value>)",
          "700": "rgba(63, 63, 70 / <alpha-value>)",
          "800": "rgba(39, 39, 42 / <alpha-value>)",
          "900": "rgba(24, 24, 27 / <alpha-value>)",
          "950": "rgba(9, 9, 11 / <alpha-value>)"
        },
        "neutral": {
          "50": "rgba(250, 250, 250 / <alpha-value>)",
          "100": "rgba(245, 245, 245 / <alpha-value>)",
          "200": "rgba(229, 229, 229 / <alpha-value>)",
          "300": "rgba(212, 212, 212 / <alpha-value>)",
          "400": "rgba(163, 163, 163 / <alpha-value>)",
          "500": "rgba(115, 115, 115 / <alpha-value>)",
          "600": "rgba(82, 82, 82 / <alpha-value>)",
          "700": "rgba(64, 64, 64 / <alpha-value>)",
          "800": "rgba(38, 38, 38 / <alpha-value>)",
          "900": "rgba(23, 23, 23 / <alpha-value>)",
          "950": "rgba(10, 10, 10 / <alpha-value>)"
        },
        "stone": {
          "50": "rgba(250, 250, 249 / <alpha-value>)",
          "100": "rgba(245, 245, 244 / <alpha-value>)",
          "200": "rgba(231, 229, 228 / <alpha-value>)",
          "300": "rgba(214, 211, 209 / <alpha-value>)",
          "400": "rgba(168, 162, 158 / <alpha-value>)",
          "500": "rgba(120, 113, 108 / <alpha-value>)",
          "600": "rgba(87, 83, 78 / <alpha-value>)",
          "700": "rgba(68, 64, 60 / <alpha-value>)",
          "800": "rgba(41, 37, 36 / <alpha-value>)",
          "900": "rgba(28, 25, 23 / <alpha-value>)",
          "950": "rgba(12, 10, 9 / <alpha-value>)"
        },
        "red": {
          "50": "rgba(254, 242, 242 / <alpha-value>)",
          "100": "rgba(254, 226, 226 / <alpha-value>)",
          "200": "rgba(254, 202, 202 / <alpha-value>)",
          "300": "rgba(252, 165, 165 / <alpha-value>)",
          "400": "rgba(248, 113, 113 / <alpha-value>)",
          "500": "rgba(239, 68, 68 / <alpha-value>)",
          "600": "rgba(220, 38, 38 / <alpha-value>)",
          "700": "rgba(185, 28, 28 / <alpha-value>)",
          "800": "rgba(153, 27, 27 / <alpha-value>)",
          "900": "rgba(127, 29, 29 / <alpha-value>)",
          "950": "rgba(69, 10, 10 / <alpha-value>)"
        },
        "orange": {
          "50": "rgba(255, 247, 237 / <alpha-value>)",
          "100": "rgba(255, 237, 213 / <alpha-value>)",
          "200": "rgba(254, 215, 170 / <alpha-value>)",
          "300": "rgba(253, 186, 116 / <alpha-value>)",
          "400": "rgba(251, 146, 60 / <alpha-value>)",
          "500": "rgba(249, 115, 22 / <alpha-value>)",
          "600": "rgba(234, 88, 12 / <alpha-value>)",
          "700": "rgba(194, 65, 12 / <alpha-value>)",
          "800": "rgba(154, 52, 18 / <alpha-value>)",
          "900": "rgba(124, 45, 18 / <alpha-value>)",
          "950": "rgba(67, 20, 7 / <alpha-value>)"
        },
        "amber": {
          "50": "rgba(255, 251, 235 / <alpha-value>)",
          "100": "rgba(254, 243, 199 / <alpha-value>)",
          "200": "rgba(253, 230, 138 / <alpha-value>)",
          "300": "rgba(252, 211, 77 / <alpha-value>)",
          "400": "rgba(251, 191, 36 / <alpha-value>)",
          "500": "rgba(245, 158, 11 / <alpha-value>)",
          "600": "rgba(217, 119, 6 / <alpha-value>)",
          "700": "rgba(180, 83, 9 / <alpha-value>)",
          "800": "rgba(146, 64, 14 / <alpha-value>)",
          "900": "rgba(120, 53, 15 / <alpha-value>)",
          "950": "rgba(69, 26, 3 / <alpha-value>)"
        },
        "yellow": {
          "50": "rgba(254, 252, 232 / <alpha-value>)",
          "100": "rgba(254, 249, 195 / <alpha-value>)",
          "200": "rgba(254, 240, 138 / <alpha-value>)",
          "300": "rgba(253, 224, 71 / <alpha-value>)",
          "400": "rgba(250, 204, 21 / <alpha-value>)",
          "500": "rgba(234, 179, 8 / <alpha-value>)",
          "600": "rgba(202, 138, 4 / <alpha-value>)",
          "700": "rgba(161, 98, 7 / <alpha-value>)",
          "800": "rgba(133, 77, 14 / <alpha-value>)",
          "900": "rgba(113, 63, 18 / <alpha-value>)",
          "950": "rgba(66, 32, 6 / <alpha-value>)"
        },
        "lime": {
          "50": "rgba(247, 254, 231 / <alpha-value>)",
          "100": "rgba(236, 252, 203 / <alpha-value>)",
          "200": "rgba(217, 249, 157 / <alpha-value>)",
          "300": "rgba(190, 242, 100 / <alpha-value>)",
          "400": "rgba(163, 230, 53 / <alpha-value>)",
          "500": "rgba(132, 204, 22 / <alpha-value>)",
          "600": "rgba(101, 163, 13 / <alpha-value>)",
          "700": "rgba(77, 124, 15 / <alpha-value>)",
          "800": "rgba(63, 98, 18 / <alpha-value>)",
          "900": "rgba(54, 83, 20 / <alpha-value>)",
          "950": "rgba(26, 46, 5 / <alpha-value>)"
        },
        "green": {
          "50": "rgba(240, 253, 244 / <alpha-value>)",
          "100": "rgba(220, 252, 231 / <alpha-value>)",
          "200": "rgba(187, 247, 208 / <alpha-value>)",
          "300": "rgba(134, 239, 172 / <alpha-value>)",
          "400": "rgba(74, 222, 128 / <alpha-value>)",
          "500": "rgba(34, 197, 94 / <alpha-value>)",
          "600": "rgba(22, 163, 74 / <alpha-value>)",
          "700": "rgba(21, 128, 61 / <alpha-value>)",
          "800": "rgba(22, 101, 52 / <alpha-value>)",
          "900": "rgba(20, 83, 45 / <alpha-value>)",
          "950": "rgba(5, 46, 22 / <alpha-value>)"
        },
        "emerald": {
          "50": "rgba(236, 253, 245 / <alpha-value>)",
          "100": "rgba(209, 250, 229 / <alpha-value>)",
          "200": "rgba(167, 243, 208 / <alpha-value>)",
          "300": "rgba(110, 231, 183 / <alpha-value>)",
          "400": "rgba(52, 211, 153 / <alpha-value>)",
          "500": "rgba(16, 185, 129 / <alpha-value>)",
          "600": "rgba(5, 150, 105 / <alpha-value>)",
          "700": "rgba(4, 120, 87 / <alpha-value>)",
          "800": "rgba(6, 95, 70 / <alpha-value>)",
          "900": "rgba(6, 78, 59 / <alpha-value>)",
          "950": "rgba(2, 44, 34 / <alpha-value>)"
        },
        "teal": {
          "50": "rgba(240, 253, 250 / <alpha-value>)",
          "100": "rgba(204, 251, 241 / <alpha-value>)",
          "200": "rgba(153, 246, 228 / <alpha-value>)",
          "300": "rgba(94, 234, 212 / <alpha-value>)",
          "400": "rgba(45, 212, 191 / <alpha-value>)",
          "500": "rgba(20, 184, 166 / <alpha-value>)",
          "600": "rgba(13, 148, 136 / <alpha-value>)",
          "700": "rgba(15, 118, 110 / <alpha-value>)",
          "800": "rgba(17, 94, 89 / <alpha-value>)",
          "900": "rgba(19, 78, 74 / <alpha-value>)",
          "950": "rgba(4, 47, 46 / <alpha-value>)"
        },
        "cyan": {
          "50": "rgba(236, 254, 255 / <alpha-value>)",
          "100": "rgba(207, 250, 254 / <alpha-value>)",
          "200": "rgba(165, 243, 252 / <alpha-value>)",
          "300": "rgba(103, 232, 249 / <alpha-value>)",
          "400": "rgba(34, 211, 238 / <alpha-value>)",
          "500": "rgba(6, 182, 212 / <alpha-value>)",
          "600": "rgba(8, 145, 178 / <alpha-value>)",
          "700": "rgba(14, 116, 144 / <alpha-value>)",
          "800": "rgba(21, 94, 117 / <alpha-value>)",
          "900": "rgba(22, 78, 99 / <alpha-value>)",
          "950": "rgba(8, 51, 68 / <alpha-value>)"
        },
        "sky": {
          "50": "rgba(240, 249, 255 / <alpha-value>)",
          "100": "rgba(224, 242, 254 / <alpha-value>)",
          "200": "rgba(186, 230, 253 / <alpha-value>)",
          "300": "rgba(125, 211, 252 / <alpha-value>)",
          "400": "rgba(56, 189, 248 / <alpha-value>)",
          "500": "rgba(14, 165, 233 / <alpha-value>)",
          "600": "rgba(2, 132, 199 / <alpha-value>)",
          "700": "rgba(3, 105, 161 / <alpha-value>)",
          "800": "rgba(7, 89, 133 / <alpha-value>)",
          "900": "rgba(12, 74, 110 / <alpha-value>)",
          "950": "rgba(8, 47, 73 / <alpha-value>)"
        },
        "blue": {
          "50": "rgba(239, 246, 255 / <alpha-value>)",
          "100": "rgba(219, 234, 254 / <alpha-value>)",
          "200": "rgba(191, 219, 254 / <alpha-value>)",
          "300": "rgba(147, 197, 253 / <alpha-value>)",
          "400": "rgba(96, 165, 250 / <alpha-value>)",
          "500": "rgba(59, 130, 246 / <alpha-value>)",
          "600": "rgba(37, 99, 235 / <alpha-value>)",
          "700": "rgba(29, 78, 216 / <alpha-value>)",
          "800": "rgba(30, 64, 175 / <alpha-value>)",
          "900": "rgba(30, 58, 138 / <alpha-value>)",
          "950": "rgba(23, 37, 84 / <alpha-value>)"
        },
        "indigo": {
          "50": "rgba(238, 242, 255 / <alpha-value>)",
          "100": "rgba(224, 231, 255 / <alpha-value>)",
          "200": "rgba(199, 210, 254 / <alpha-value>)",
          "300": "rgba(165, 180, 252 / <alpha-value>)",
          "400": "rgba(129, 140, 248 / <alpha-value>)",
          "500": "rgba(99, 102, 241 / <alpha-value>)",
          "600": "rgba(79, 70, 229 / <alpha-value>)",
          "700": "rgba(67, 56, 202 / <alpha-value>)",
          "800": "rgba(55, 48, 163 / <alpha-value>)",
          "900": "rgba(49, 46, 129 / <alpha-value>)",
          "950": "rgba(30, 27, 75 / <alpha-value>)"
        },
        "violet": {
          "50": "rgba(245, 243, 255 / <alpha-value>)",
          "100": "rgba(237, 233, 254 / <alpha-value>)",
          "200": "rgba(221, 214, 254 / <alpha-value>)",
          "300": "rgba(196, 181, 253 / <alpha-value>)",
          "400": "rgba(167, 139, 250 / <alpha-value>)",
          "500": "rgba(139, 92, 246 / <alpha-value>)",
          "600": "rgba(124, 58, 237 / <alpha-value>)",
          "700": "rgba(109, 40, 217 / <alpha-value>)",
          "800": "rgba(91, 33, 182 / <alpha-value>)",
          "900": "rgba(76, 29, 149 / <alpha-value>)",
          "950": "rgba(46, 16, 101 / <alpha-value>)"
        },
        "purple": {
          "50": "rgba(250, 245, 255 / <alpha-value>)",
          "100": "rgba(243, 232, 255 / <alpha-value>)",
          "200": "rgba(233, 213, 255 / <alpha-value>)",
          "300": "rgba(216, 180, 254 / <alpha-value>)",
          "400": "rgba(192, 132, 252 / <alpha-value>)",
          "500": "rgba(168, 85, 247 / <alpha-value>)",
          "600": "rgba(147, 51, 234 / <alpha-value>)",
          "700": "rgba(126, 34, 206 / <alpha-value>)",
          "800": "rgba(107, 33, 168 / <alpha-value>)",
          "900": "rgba(88, 28, 135 / <alpha-value>)",
          "950": "rgba(59, 7, 100 / <alpha-value>)"
        },
        "fuchsia": {
          "50": "rgba(253, 244, 255 / <alpha-value>)",
          "100": "rgba(250, 232, 255 / <alpha-value>)",
          "200": "rgba(245, 208, 254 / <alpha-value>)",
          "300": "rgba(240, 171, 252 / <alpha-value>)",
          "400": "rgba(232, 121, 249 / <alpha-value>)",
          "500": "rgba(217, 70, 239 / <alpha-value>)",
          "600": "rgba(192, 38, 211 / <alpha-value>)",
          "700": "rgba(162, 28, 175 / <alpha-value>)",
          "800": "rgba(134, 25, 143 / <alpha-value>)",
          "900": "rgba(112, 26, 117 / <alpha-value>)",
          "950": "rgba(74, 4, 78 / <alpha-value>)"
        },
        "pink": {
          "50": "rgba(253, 242, 248 / <alpha-value>)",
          "100": "rgba(252, 231, 243 / <alpha-value>)",
          "200": "rgba(251, 207, 232 / <alpha-value>)",
          "300": "rgba(249, 168, 212 / <alpha-value>)",
          "400": "rgba(244, 114, 182 / <alpha-value>)",
          "500": "rgba(236, 72, 153 / <alpha-value>)",
          "600": "rgba(219, 39, 119 / <alpha-value>)",
          "700": "rgba(190, 24, 93 / <alpha-value>)",
          "800": "rgba(157, 23, 77 / <alpha-value>)",
          "900": "rgba(131, 24, 67 / <alpha-value>)",
          "950": "rgba(80, 7, 36 / <alpha-value>)"
        },
        "rose": {
          "50": "rgba(255, 241, 242 / <alpha-value>)",
          "100": "rgba(255, 228, 230 / <alpha-value>)",
          "200": "rgba(254, 205, 211 / <alpha-value>)",
          "300": "rgba(253, 164, 175 / <alpha-value>)",
          "400": "rgba(251, 113, 133 / <alpha-value>)",
          "500": "rgba(244, 63, 94 / <alpha-value>)",
          "600": "rgba(225, 29, 72 / <alpha-value>)",
          "700": "rgba(190, 18, 60 / <alpha-value>)",
          "800": "rgba(159, 18, 57 / <alpha-value>)",
          "900": "rgba(136, 19, 55 / <alpha-value>)",
          "950": "rgba(76, 5, 25 / <alpha-value>)"
        },
        "white": "rgba(255, 255, 255 / <alpha-value>)",
        "black": "rgba(0, 0, 0 / <alpha-value>)",
        "inherit": "inherit",
        "current": "currentColor",
        "transparent": "transparent"
      }
    }
  },
  {
    "name": "dark",
    "selectors": [
      "html.dark"
    ],
    "mediaQuery": "@media (prefers-color-scheme: dark)",
    "theme": {
      "colors": {
        "slate": {
          "50": "rgba(2, 6, 23 / <alpha-value>)",
          "100": "rgba(15, 23, 42 / <alpha-value>)",
          "200": "rgba(30, 41, 59 / <alpha-value>)",
          "300": "rgba(51, 65, 85 / <alpha-value>)",
          "400": "rgba(71, 85, 105 / <alpha-value>)",
          "500": "rgba(100, 116, 139 / <alpha-value>)",
          "600": "rgba(148, 163, 184 / <alpha-value>)",
          "700": "rgba(203, 213, 225 / <alpha-value>)",
          "800": "rgba(226, 232, 240 / <alpha-value>)",
          "900": "rgba(241, 245, 249 / <alpha-value>)",
          "950": "rgba(248, 250, 252 / <alpha-value>)"
        },
        "gray": {
          "50": "rgba(3, 7, 18 / <alpha-value>)",
          "100": "rgba(17, 24, 39 / <alpha-value>)",
          "200": "rgba(31, 41, 55 / <alpha-value>)",
          "300": "rgba(55, 65, 81 / <alpha-value>)",
          "400": "rgba(75, 85, 99 / <alpha-value>)",
          "500": "rgba(107, 114, 128 / <alpha-value>)",
          "600": "rgba(156, 163, 175 / <alpha-value>)",
          "700": "rgba(209, 213, 219 / <alpha-value>)",
          "800": "rgba(229, 231, 235 / <alpha-value>)",
          "900": "rgba(243, 244, 246 / <alpha-value>)",
          "950": "rgba(249, 250, 251 / <alpha-value>)"
        },
        "zinc": {
          "50": "rgba(9, 9, 11 / <alpha-value>)",
          "100": "rgba(24, 24, 27 / <alpha-value>)",
          "200": "rgba(39, 39, 42 / <alpha-value>)",
          "300": "rgba(63, 63, 70 / <alpha-value>)",
          "400": "rgba(82, 82, 91 / <alpha-value>)",
          "500": "rgba(113, 113, 122 / <alpha-value>)",
          "600": "rgba(161, 161, 170 / <alpha-value>)",
          "700": "rgba(212, 212, 216 / <alpha-value>)",
          "800": "rgba(228, 228, 231 / <alpha-value>)",
          "900": "rgba(244, 244, 245 / <alpha-value>)",
          "950": "rgba(250, 250, 250 / <alpha-value>)"
        },
        "neutral": {
          "50": "rgba(10, 10, 10 / <alpha-value>)",
          "100": "rgba(23, 23, 23 / <alpha-value>)",
          "200": "rgba(38, 38, 38 / <alpha-value>)",
          "300": "rgba(64, 64, 64 / <alpha-value>)",
          "400": "rgba(82, 82, 82 / <alpha-value>)",
          "500": "rgba(115, 115, 115 / <alpha-value>)",
          "600": "rgba(163, 163, 163 / <alpha-value>)",
          "700": "rgba(212, 212, 212 / <alpha-value>)",
          "800": "rgba(229, 229, 229 / <alpha-value>)",
          "900": "rgba(245, 245, 245 / <alpha-value>)",
          "950": "rgba(250, 250, 250 / <alpha-value>)"
        },
        "stone": {
          "50": "rgba(12, 10, 9 / <alpha-value>)",
          "100": "rgba(28, 25, 23 / <alpha-value>)",
          "200": "rgba(41, 37, 36 / <alpha-value>)",
          "300": "rgba(68, 64, 60 / <alpha-value>)",
          "400": "rgba(87, 83, 78 / <alpha-value>)",
          "500": "rgba(120, 113, 108 / <alpha-value>)",
          "600": "rgba(168, 162, 158 / <alpha-value>)",
          "700": "rgba(214, 211, 209 / <alpha-value>)",
          "800": "rgba(231, 229, 228 / <alpha-value>)",
          "900": "rgba(245, 245, 244 / <alpha-value>)",
          "950": "rgba(250, 250, 249 / <alpha-value>)"
        },
        "red": {
          "50": "rgba(69, 10, 10 / <alpha-value>)",
          "100": "rgba(127, 29, 29 / <alpha-value>)",
          "200": "rgba(153, 27, 27 / <alpha-value>)",
          "300": "rgba(185, 28, 28 / <alpha-value>)",
          "400": "rgba(220, 38, 38 / <alpha-value>)",
          "500": "rgba(239, 68, 68 / <alpha-value>)",
          "600": "rgba(248, 113, 113 / <alpha-value>)",
          "700": "rgba(252, 165, 165 / <alpha-value>)",
          "800": "rgba(254, 202, 202 / <alpha-value>)",
          "900": "rgba(254, 226, 226 / <alpha-value>)",
          "950": "rgba(254, 242, 242 / <alpha-value>)"
        },
        "orange": {
          "50": "rgba(67, 20, 7 / <alpha-value>)",
          "100": "rgba(124, 45, 18 / <alpha-value>)",
          "200": "rgba(154, 52, 18 / <alpha-value>)",
          "300": "rgba(194, 65, 12 / <alpha-value>)",
          "400": "rgba(234, 88, 12 / <alpha-value>)",
          "500": "rgba(249, 115, 22 / <alpha-value>)",
          "600": "rgba(251, 146, 60 / <alpha-value>)",
          "700": "rgba(253, 186, 116 / <alpha-value>)",
          "800": "rgba(254, 215, 170 / <alpha-value>)",
          "900": "rgba(255, 237, 213 / <alpha-value>)",
          "950": "rgba(255, 247, 237 / <alpha-value>)"
        },
        "amber": {
          "50": "rgba(69, 26, 3 / <alpha-value>)",
          "100": "rgba(120, 53, 15 / <alpha-value>)",
          "200": "rgba(146, 64, 14 / <alpha-value>)",
          "300": "rgba(180, 83, 9 / <alpha-value>)",
          "400": "rgba(217, 119, 6 / <alpha-value>)",
          "500": "rgba(245, 158, 11 / <alpha-value>)",
          "600": "rgba(251, 191, 36 / <alpha-value>)",
          "700": "rgba(252, 211, 77 / <alpha-value>)",
          "800": "rgba(253, 230, 138 / <alpha-value>)",
          "900": "rgba(254, 243, 199 / <alpha-value>)",
          "950": "rgba(255, 251, 235 / <alpha-value>)"
        },
        "yellow": {
          "50": "rgba(66, 32, 6 / <alpha-value>)",
          "100": "rgba(113, 63, 18 / <alpha-value>)",
          "200": "rgba(133, 77, 14 / <alpha-value>)",
          "300": "rgba(161, 98, 7 / <alpha-value>)",
          "400": "rgba(202, 138, 4 / <alpha-value>)",
          "500": "rgba(234, 179, 8 / <alpha-value>)",
          "600": "rgba(250, 204, 21 / <alpha-value>)",
          "700": "rgba(253, 224, 71 / <alpha-value>)",
          "800": "rgba(254, 240, 138 / <alpha-value>)",
          "900": "rgba(254, 249, 195 / <alpha-value>)",
          "950": "rgba(254, 252, 232 / <alpha-value>)"
        },
        "lime": {
          "50": "rgba(26, 46, 5 / <alpha-value>)",
          "100": "rgba(54, 83, 20 / <alpha-value>)",
          "200": "rgba(63, 98, 18 / <alpha-value>)",
          "300": "rgba(77, 124, 15 / <alpha-value>)",
          "400": "rgba(101, 163, 13 / <alpha-value>)",
          "500": "rgba(132, 204, 22 / <alpha-value>)",
          "600": "rgba(163, 230, 53 / <alpha-value>)",
          "700": "rgba(190, 242, 100 / <alpha-value>)",
          "800": "rgba(217, 249, 157 / <alpha-value>)",
          "900": "rgba(236, 252, 203 / <alpha-value>)",
          "950": "rgba(247, 254, 231 / <alpha-value>)"
        },
        "green": {
          "50": "rgba(5, 46, 22 / <alpha-value>)",
          "100": "rgba(20, 83, 45 / <alpha-value>)",
          "200": "rgba(22, 101, 52 / <alpha-value>)",
          "300": "rgba(21, 128, 61 / <alpha-value>)",
          "400": "rgba(22, 163, 74 / <alpha-value>)",
          "500": "rgba(34, 197, 94 / <alpha-value>)",
          "600": "rgba(74, 222, 128 / <alpha-value>)",
          "700": "rgba(134, 239, 172 / <alpha-value>)",
          "800": "rgba(187, 247, 208 / <alpha-value>)",
          "900": "rgba(220, 252, 231 / <alpha-value>)",
          "950": "rgba(240, 253, 244 / <alpha-value>)"
        },
        "emerald": {
          "50": "rgba(2, 44, 34 / <alpha-value>)",
          "100": "rgba(6, 78, 59 / <alpha-value>)",
          "200": "rgba(6, 95, 70 / <alpha-value>)",
          "300": "rgba(4, 120, 87 / <alpha-value>)",
          "400": "rgba(5, 150, 105 / <alpha-value>)",
          "500": "rgba(16, 185, 129 / <alpha-value>)",
          "600": "rgba(52, 211, 153 / <alpha-value>)",
          "700": "rgba(110, 231, 183 / <alpha-value>)",
          "800": "rgba(167, 243, 208 / <alpha-value>)",
          "900": "rgba(209, 250, 229 / <alpha-value>)",
          "950": "rgba(236, 253, 245 / <alpha-value>)"
        },
        "teal": {
          "50": "rgba(4, 47, 46 / <alpha-value>)",
          "100": "rgba(19, 78, 74 / <alpha-value>)",
          "200": "rgba(17, 94, 89 / <alpha-value>)",
          "300": "rgba(15, 118, 110 / <alpha-value>)",
          "400": "rgba(13, 148, 136 / <alpha-value>)",
          "500": "rgba(20, 184, 166 / <alpha-value>)",
          "600": "rgba(45, 212, 191 / <alpha-value>)",
          "700": "rgba(94, 234, 212 / <alpha-value>)",
          "800": "rgba(153, 246, 228 / <alpha-value>)",
          "900": "rgba(204, 251, 241 / <alpha-value>)",
          "950": "rgba(240, 253, 250 / <alpha-value>)"
        },
        "cyan": {
          "50": "rgba(8, 51, 68 / <alpha-value>)",
          "100": "rgba(22, 78, 99 / <alpha-value>)",
          "200": "rgba(21, 94, 117 / <alpha-value>)",
          "300": "rgba(14, 116, 144 / <alpha-value>)",
          "400": "rgba(8, 145, 178 / <alpha-value>)",
          "500": "rgba(6, 182, 212 / <alpha-value>)",
          "600": "rgba(34, 211, 238 / <alpha-value>)",
          "700": "rgba(103, 232, 249 / <alpha-value>)",
          "800": "rgba(165, 243, 252 / <alpha-value>)",
          "900": "rgba(207, 250, 254 / <alpha-value>)",
          "950": "rgba(236, 254, 255 / <alpha-value>)"
        },
        "sky": {
          "50": "rgba(8, 47, 73 / <alpha-value>)",
          "100": "rgba(12, 74, 110 / <alpha-value>)",
          "200": "rgba(7, 89, 133 / <alpha-value>)",
          "300": "rgba(3, 105, 161 / <alpha-value>)",
          "400": "rgba(2, 132, 199 / <alpha-value>)",
          "500": "rgba(14, 165, 233 / <alpha-value>)",
          "600": "rgba(56, 189, 248 / <alpha-value>)",
          "700": "rgba(125, 211, 252 / <alpha-value>)",
          "800": "rgba(186, 230, 253 / <alpha-value>)",
          "900": "rgba(224, 242, 254 / <alpha-value>)",
          "950": "rgba(240, 249, 255 / <alpha-value>)"
        },
        "blue": {
          "50": "rgba(23, 37, 84 / <alpha-value>)",
          "100": "rgba(30, 58, 138 / <alpha-value>)",
          "200": "rgba(30, 64, 175 / <alpha-value>)",
          "300": "rgba(29, 78, 216 / <alpha-value>)",
          "400": "rgba(37, 99, 235 / <alpha-value>)",
          "500": "rgba(59, 130, 246 / <alpha-value>)",
          "600": "rgba(96, 165, 250 / <alpha-value>)",
          "700": "rgba(147, 197, 253 / <alpha-value>)",
          "800": "rgba(191, 219, 254 / <alpha-value>)",
          "900": "rgba(219, 234, 254 / <alpha-value>)",
          "950": "rgba(239, 246, 255 / <alpha-value>)"
        },
        "indigo": {
          "50": "rgba(30, 27, 75 / <alpha-value>)",
          "100": "rgba(49, 46, 129 / <alpha-value>)",
          "200": "rgba(55, 48, 163 / <alpha-value>)",
          "300": "rgba(67, 56, 202 / <alpha-value>)",
          "400": "rgba(79, 70, 229 / <alpha-value>)",
          "500": "rgba(99, 102, 241 / <alpha-value>)",
          "600": "rgba(129, 140, 248 / <alpha-value>)",
          "700": "rgba(165, 180, 252 / <alpha-value>)",
          "800": "rgba(199, 210, 254 / <alpha-value>)",
          "900": "rgba(224, 231, 255 / <alpha-value>)",
          "950": "rgba(238, 242, 255 / <alpha-value>)"
        },
        "violet": {
          "50": "rgba(46, 16, 101 / <alpha-value>)",
          "100": "rgba(76, 29, 149 / <alpha-value>)",
          "200": "rgba(91, 33, 182 / <alpha-value>)",
          "300": "rgba(109, 40, 217 / <alpha-value>)",
          "400": "rgba(124, 58, 237 / <alpha-value>)",
          "500": "rgba(139, 92, 246 / <alpha-value>)",
          "600": "rgba(167, 139, 250 / <alpha-value>)",
          "700": "rgba(196, 181, 253 / <alpha-value>)",
          "800": "rgba(221, 214, 254 / <alpha-value>)",
          "900": "rgba(237, 233, 254 / <alpha-value>)",
          "950": "rgba(245, 243, 255 / <alpha-value>)"
        },
        "purple": {
          "50": "rgba(59, 7, 100 / <alpha-value>)",
          "100": "rgba(88, 28, 135 / <alpha-value>)",
          "200": "rgba(107, 33, 168 / <alpha-value>)",
          "300": "rgba(126, 34, 206 / <alpha-value>)",
          "400": "rgba(147, 51, 234 / <alpha-value>)",
          "500": "rgba(168, 85, 247 / <alpha-value>)",
          "600": "rgba(192, 132, 252 / <alpha-value>)",
          "700": "rgba(216, 180, 254 / <alpha-value>)",
          "800": "rgba(233, 213, 255 / <alpha-value>)",
          "900": "rgba(243, 232, 255 / <alpha-value>)",
          "950": "rgba(250, 245, 255 / <alpha-value>)"
        },
        "fuchsia": {
          "50": "rgba(74, 4, 78 / <alpha-value>)",
          "100": "rgba(112, 26, 117 / <alpha-value>)",
          "200": "rgba(134, 25, 143 / <alpha-value>)",
          "300": "rgba(162, 28, 175 / <alpha-value>)",
          "400": "rgba(192, 38, 211 / <alpha-value>)",
          "500": "rgba(217, 70, 239 / <alpha-value>)",
          "600": "rgba(232, 121, 249 / <alpha-value>)",
          "700": "rgba(240, 171, 252 / <alpha-value>)",
          "800": "rgba(245, 208, 254 / <alpha-value>)",
          "900": "rgba(250, 232, 255 / <alpha-value>)",
          "950": "rgba(253, 244, 255 / <alpha-value>)"
        },
        "pink": {
          "50": "rgba(80, 7, 36 / <alpha-value>)",
          "100": "rgba(131, 24, 67 / <alpha-value>)",
          "200": "rgba(157, 23, 77 / <alpha-value>)",
          "300": "rgba(190, 24, 93 / <alpha-value>)",
          "400": "rgba(219, 39, 119 / <alpha-value>)",
          "500": "rgba(236, 72, 153 / <alpha-value>)",
          "600": "rgba(244, 114, 182 / <alpha-value>)",
          "700": "rgba(249, 168, 212 / <alpha-value>)",
          "800": "rgba(251, 207, 232 / <alpha-value>)",
          "900": "rgba(252, 231, 243 / <alpha-value>)",
          "950": "rgba(253, 242, 248 / <alpha-value>)"
        },
        "rose": {
          "50": "rgba(76, 5, 25 / <alpha-value>)",
          "100": "rgba(136, 19, 55 / <alpha-value>)",
          "200": "rgba(159, 18, 57 / <alpha-value>)",
          "300": "rgba(190, 18, 60 / <alpha-value>)",
          "400": "rgba(225, 29, 72 / <alpha-value>)",
          "500": "rgba(244, 63, 94 / <alpha-value>)",
          "600": "rgba(251, 113, 133 / <alpha-value>)",
          "700": "rgba(253, 164, 175 / <alpha-value>)",
          "800": "rgba(254, 205, 211 / <alpha-value>)",
          "900": "rgba(255, 228, 230 / <alpha-value>)",
          "950": "rgba(255, 241, 242 / <alpha-value>)"
        },
        "black": "rgba(255, 255, 255 / <alpha-value>)",
        "white": "rgba(0, 0, 0 / <alpha-value>)",
        "inherit": "inherit",
        "current": "currentColor",
        "transparent": "transparent"
      }
    }
  }
]