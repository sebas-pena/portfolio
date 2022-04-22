import React from "react"

export const FilesIcon = ({ onClick }) => (
	<>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
			<path
				fill="#C5C5C5"
				d="M17.5 0H8.5L7 1.5V6H2.5L1 7.5V22.5699L2.5 24H14.5699L16 22.5699V18H20.7L22 16.5699V4.5L17.5 0ZM17.5 2.12L19.88 4.5H17.5V2.12ZM14.5 22.5H2.5V7.5H7V16.5699L8.5 18H14.5V22.5ZM20.5 16.5H8.5V1.5H16V6H20.5V16.5Z"
			/>
		</svg>
	</>
)

export const LinkedinIcon = ({ size, color = "#C5C5C5" }) => (
	<>
		<svg width={size} height={size} viewBox="0 0 24 24">
			<path
				fill={color}
				d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
			/>
		</svg>
	</>
)

export const GitHubIcon = ({ size, color = "#C5C5C5" }) => (
	<>
		<svg width={size} height={size} viewBox="0 0 24 24">
			<path
				fill={color}
				d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
			/>
		</svg>
	</>
)

export const InstagramIcon = ({ size, color = "#C5C5C5" }) => (
	<>
		<svg width={size} height={size} viewBox="0 0 24 24">
			<path
				fill={color}
				d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
			/>
		</svg>
	</>
)

export const ArrowIcon = ({ size, className = "", color = "#C5C5C5" }) => (
	<>
		<svg className={className} width={size} height={size} viewBox="0 0 24 24">
			<path fill={color} d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
		</svg>
	</>
)

export const FolderIcon = ({ size, color = "#C5C5C5" }) => (
	<>
		<svg width={size} height={size} viewBox="0 0 24 24">
			<path
				fill={color}
				d="M19,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H19A2,2 0 0,1 21,8H21L4,8V18L6.14,10H23.21L20.93,18.5C20.7,19.37 19.92,20 19,20Z"
			/>
		</svg>
	</>
)

export const PersonalCardIcon = ({ size, color = "#C5C5C5" }) => (
	<>
		<svg width={size} height={size} viewBox="0 0 24 24">
			<path
				fill={color}
				d="M2,3H22C23.05,3 24,3.95 24,5V19C24,20.05 23.05,21 22,21H2C0.95,21 0,20.05 0,19V5C0,3.95 0.95,3 2,3M14,6V7H22V6H14M14,8V9H21.5L22,9V8H14M14,10V11H21V10H14M8,13.91C6,13.91 2,15 2,17V18H14V17C14,15 10,13.91 8,13.91M8,6A3,3 0 0,0 5,9A3,3 0 0,0 8,12A3,3 0 0,0 11,9A3,3 0 0,0 8,6Z"
			/>
		</svg>
	</>
)

export const GitForkIcon = ({ size, color = "#C5C5C5" }) => (
	<>
		<svg width={size} height={size} viewBox="0 0 24 24">
			<path
				fill={color}
				d="M7,12 L14.5,12 C16.277025,12 17.7447372,10.6756742 17.970024,8.96013518 C16.2885152,8.7047201 15,7.25283448 15,5.5 C15,3.56700338 16.5670034,2 18.5,2 C20.4329966,2 22,3.56700338 22,5.5 C22,7.27155475 20.6838151,8.73569805 18.9759671,8.96790818 C18.7419236,11.2333126 16.8272778,13 14.5,13 L7,13 L7,15.0354444 C8.69614707,15.2780593 10,16.736764 10,18.5 C10,20.4329966 8.43299662,22 6.5,22 C4.56700338,22 3,20.4329966 3,18.5 C3,16.736764 4.30385293,15.2780593 6,15.0354444 L6,8.96455557 C4.30385293,8.72194074 3,7.26323595 3,5.5 C3,3.56700338 4.56700338,2 6.5,2 C8.43299662,2 10,3.56700338 10,5.5 C10,7.26323595 8.69614707,8.72194074 7,8.96455557 L7,12 Z M4,18.5 C4,19.8807119 5.11928813,21 6.5,21 C7.88071187,21 9,19.8807119 9,18.5 C9,17.1192881 7.88071187,16 6.5,16 C5.11928813,16 4,17.1192881 4,18.5 Z M4,5.5 C4,6.88071187 5.11928813,8 6.5,8 C7.88071187,8 9,6.88071187 9,5.5 C9,4.11928813 7.88071187,3 6.5,3 C5.11928813,3 4,4.11928813 4,5.5 Z M18.5,3 C17.1192881,3 16,4.11928813 16,5.5 C16,6.88071187 17.1192881,8 18.5,8 C19.8807119,8 21,6.88071187 21,5.5 C21,4.11928813 19.8807119,3 18.5,3 Z"
			/>
		</svg>
	</>
)

export const ToDoListIcon = ({ size, color = "#C5C5C5" }) => (
	<>
		<svg width={size} height={size} viewBox="0 0 24 24">
			<path
				fill={color}
				d="M21,19V17H8V19H21M21,13V11H8V13H21M8,7H21V5H8V7M4,5V7H6V5H4M3,5A1,1 0 0,1 4,4H6A1,1 0 0,1 7,5V7A1,1 0 0,1 6,8H4A1,1 0 0,1 3,7V5M4,11V13H6V11H4M3,11A1,1 0 0,1 4,10H6A1,1 0 0,1 7,11V13A1,1 0 0,1 6,14H4A1,1 0 0,1 3,13V11M4,17V19H6V17H4M3,17A1,1 0 0,1 4,16H6A1,1 0 0,1 7,17V19A1,1 0 0,1 6,20H4A1,1 0 0,1 3,19V17Z"
			/>
		</svg>
	</>
)

export const ExternalLinkIcon = ({ size, color }) => (
	<>
		<svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
			<path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
		</svg>
	</>
)

export const SassLogo = ({ size, color }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 256 192"
		version="1.1"
		preserveAspectRatio="xMidYMid"
	>
		<g fill={color}>
			<path d="M220.281239,110.513661 C211.374863,110.560291 203.634244,112.705282 197.152641,115.876138 C194.774499,111.166485 192.396357,106.969763 191.976685,103.892168 C191.510383,100.301639 190.95082,98.1100182 191.510383,93.8200364 C192.069945,89.5300546 194.587978,83.4214936 194.541348,82.9551913 C194.494718,82.4888889 193.981785,80.2972678 188.852459,80.2506375 C183.723133,80.2040073 179.29326,81.2298725 178.780328,82.5821494 C178.267395,83.9344262 177.28816,87.0120219 176.635337,90.182878 C175.749362,94.8459016 166.376685,111.492896 161.014208,120.21275 C159.288889,116.808743 157.796721,113.824408 157.47031,111.446266 C157.004007,107.855738 156.444444,105.664117 157.004007,101.374135 C157.56357,97.084153 160.081603,90.975592 160.034973,90.5092896 C159.988342,90.0429872 159.47541,87.8513661 154.346084,87.8047359 C149.216758,87.7581056 144.786885,88.7839709 144.273953,90.1362477 C143.76102,91.4885246 143.201457,94.6593807 142.128962,97.7369763 C141.056466,100.814572 128.606193,128.606193 125.342077,135.78725 C123.663388,139.471038 122.217851,142.408743 121.191985,144.413843 L121.191985,144.413843 C121.191985,144.413843 121.145355,144.553734 121.005464,144.786885 C120.11949,146.512204 119.606557,147.444809 119.606557,147.444809 C119.606557,147.444809 119.606557,147.444809 119.606557,147.491439 C118.907104,148.750455 118.16102,149.916211 117.787978,149.916211 C117.508197,149.916211 116.995264,146.558834 117.881239,141.989071 C119.746448,132.336612 124.176321,117.321676 124.12969,116.808743 C124.12969,116.528962 124.969035,113.917668 121.238616,112.565392 C117.601457,111.213115 116.295811,113.451366 115.969399,113.451366 C115.642987,113.451366 115.409836,114.24408 115.409836,114.24408 C115.409836,114.24408 119.466667,97.3639344 107.669217,97.3639344 C100.301639,97.3639344 90.1362477,105.430965 85.1001821,112.705282 C81.929326,114.430601 75.1679417,118.11439 67.940255,122.07796 C65.189071,123.616758 62.3446266,125.155556 59.6867031,126.601093 C59.5001821,126.414572 59.3136612,126.181421 59.1271403,125.9949 C44.8582878,110.746812 18.4655738,99.9752277 19.5846995,79.5045537 C20.0043716,72.0437158 22.5690346,52.4590164 70.2717668,28.6775956 C109.534426,9.32604736 140.776685,14.6885246 146.185792,26.579235 C153.926412,43.5526412 129.445537,75.0746812 88.8772313,79.6444444 C73.3959927,81.3697632 65.2823315,75.4010929 63.2306011,73.1628415 C61.0856102,70.8313297 60.7591985,70.691439 59.9664845,71.1577413 C58.6608379,71.8571949 59.5001821,73.9555556 59.9664845,75.1679417 C61.1788707,78.3387978 66.168306,83.9344262 74.6083789,86.6856102 C82.0692168,89.1103825 100.208379,90.4626594 122.17122,81.9759563 C146.745355,72.463388 165.957013,46.0240437 160.314754,23.8746812 C154.672495,1.3989071 117.368306,-6.01530055 82.0692168,6.52823315 C61.0856102,13.989071 38.3300546,25.7398907 21.9628415,41.0346084 C2.51803279,59.2204007 -0.559562842,75.028051 0.699453552,81.6495446 C5.22258652,105.151184 37.6306011,120.445902 50.5938069,131.777049 C49.9409836,132.150091 49.3347905,132.476503 48.8218579,132.756284 C42.340255,135.97377 17.6262295,148.890346 11.4710383,162.553005 C4.47650273,178.034244 12.5901639,189.13224 17.9526412,190.624408 C34.5996357,195.240801 51.7129326,186.940619 60.8990893,173.23133 C70.0852459,159.52204 68.9661202,141.70929 64.7227687,133.548998 C64.6761384,133.455738 64.6295082,133.362477 64.5362477,133.269217 C66.2149362,132.289982 67.940255,131.264117 69.6189435,130.284882 C72.9296903,128.326412 76.1938069,126.507832 78.9916211,125.015665 C77.4061931,129.352277 76.2404372,134.528233 75.6808743,141.989071 C74.9814208,150.755556 78.571949,162.133333 83.2816029,166.609836 C85.3799636,168.568306 87.8513661,168.614936 89.4367942,168.614936 C94.9391621,168.614936 97.4105647,164.045173 100.161749,158.636066 C103.519126,152.014572 106.550091,144.320583 106.550091,144.320583 C106.550091,144.320583 102.773042,165.117668 113.031694,165.117668 C116.762113,165.117668 120.539162,160.268124 122.217851,157.796721 L122.217851,157.843352 C122.217851,157.843352 122.311111,157.703461 122.497632,157.377049 C122.870674,156.770856 123.103825,156.397814 123.103825,156.397814 L123.103825,156.304554 C124.595993,153.69326 127.95337,147.77122 132.942805,137.93224 C139.377778,125.248816 145.579599,109.394536 145.579599,109.394536 C145.579599,109.394536 146.139162,113.264845 148.051002,119.699818 C149.170128,123.476867 151.501639,127.626958 153.366849,131.637158 C151.874681,133.735519 150.942077,134.901275 150.942077,134.901275 C150.942077,134.901275 150.942077,134.901275 150.988707,134.947905 C149.776321,136.533333 148.470674,138.258652 147.025137,139.937341 C141.942441,145.999271 135.88051,152.947177 135.041166,154.952277 C134.061931,157.330419 134.295082,159.055738 136.160291,160.454645 C137.512568,161.48051 139.937341,161.620401 142.408743,161.48051 C146.978506,161.154098 150.195993,160.034973 151.781421,159.335519 C154.252823,158.449545 157.143898,157.097268 159.848452,155.092168 C164.837887,151.408379 167.868852,146.139162 167.589071,139.191257 C167.44918,135.367577 166.190164,131.543898 164.651366,127.95337 C165.117668,127.300546 165.537341,126.647723 166.003643,125.9949 C173.884153,114.477231 179.992714,101.840437 179.992714,101.840437 C179.992714,101.840437 180.552277,105.710747 182.464117,112.145719 C183.396721,115.409836 185.308561,118.953734 186.98725,122.404372 C179.573042,128.419672 175.003279,135.414208 173.37122,139.983971 C170.433515,148.470674 172.718397,152.294353 177.055009,153.180328 C179.013479,153.6 181.811293,152.667395 183.863024,151.781421 C186.474317,150.942077 189.551913,149.496539 192.489617,147.351548 C197.479053,143.66776 202.281967,138.538434 202.002186,131.590528 C201.862295,128.419672 201.022951,125.295446 199.857195,122.264481 C206.152277,119.653188 214.265938,118.20765 224.617851,119.420036 C246.813843,122.03133 251.197086,135.88051 250.357741,141.70929 C249.518397,147.538069 244.855373,150.708925 243.316576,151.68816 C241.777778,152.667395 241.264845,152.993807 241.404736,153.69326 C241.591257,154.719126 242.337341,154.672495 243.642987,154.485974 C245.461566,154.159563 255.300546,149.776321 255.720219,139.051366 C256.419672,125.342077 243.363206,110.37377 220.281239,110.513661 L220.281239,110.513661 Z M49.0550091,168.241894 C41.6874317,176.262295 31.4287796,179.29326 26.9989071,176.728597 C22.242623,173.977413 24.1078324,162.133333 33.1540984,153.64663 C38.6564663,148.470674 45.7442623,143.66776 50.4539162,140.730055 C51.5264117,140.077231 53.1118397,139.144627 55.0236794,137.978871 C55.3500911,137.79235 55.536612,137.699089 55.536612,137.699089 L55.536612,137.699089 C55.9096539,137.465938 56.2826958,137.232787 56.6557377,136.999636 C59.9664845,149.123497 56.7956284,159.801821 49.0550091,168.241894 L49.0550091,168.241894 Z M102.679781,131.777049 C100.115118,138.025501 94.7526412,154.019672 91.4885246,153.133698 C88.6907104,152.387614 86.9653916,140.263752 90.9289617,128.279781 C92.9340619,122.264481 97.1774135,115.083424 99.648816,112.28561 C103.659016,107.809107 108.088889,106.31694 109.161384,108.135519 C110.513661,110.513661 104.265209,127.860109 102.679781,131.777049 L102.679781,131.777049 Z M146.931876,152.947177 C145.859381,153.50674 144.833515,153.879781 144.367213,153.6 C144.040801,153.413479 144.833515,152.667395 144.833515,152.667395 C144.833515,152.667395 150.382514,146.698725 152.574135,143.994171 C153.833151,142.408743 155.325319,140.543534 156.910747,138.445173 L156.910747,139.051366 C156.910747,146.185792 150.009472,150.988707 146.931876,152.947177 L146.931876,152.947177 Z M181.065209,145.159927 C180.272495,144.600364 180.412386,142.735155 183.07031,136.906375 C184.096175,134.621494 186.520947,130.797814 190.671038,127.114026 C191.137341,128.606193 191.463752,130.05173 191.417122,131.404007 C191.370492,140.403643 184.935519,143.76102 181.065209,145.159927 L181.065209,145.159927 Z" />
		</g>
	</svg>
)

export const ReactLogo = ({ size, color }) => (
	<svg width={size} height={size} viewBox="0 0 24 24">
		<path
			fill={color}
			d="M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M13.03,18.3C14.62,19.8 16,20.38 16.62,20C17.26,19.65 17.45,18.18 16.94,16.04C16.17,16.2 15.36,16.32 14.54,16.4C14.06,17.07 13.55,17.71 13.03,18.3M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M10.97,5.7C9.38,4.2 8,3.62 7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7Z"
		/>
	</svg>
)

export const NodeLogo = ({ size, color }) => (
	<svg width={size} height={size} viewBox="0 0 24 24">
		<path
			fill={color}
			d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.3,6.63 3,7.15 3,7.71V16.29C3,16.85 3.3,17.37 3.78,17.65L5.73,18.77C6.68,19.23 7,19.24 7.44,19.24C8.84,19.24 9.65,18.39 9.65,16.91V8.44C9.65,8.32 9.55,8.22 9.43,8.22H8.5C8.37,8.22 8.27,8.32 8.27,8.44V16.91C8.27,17.57 7.59,18.22 6.5,17.67L4.45,16.5C4.38,16.45 4.34,16.37 4.34,16.29V7.71C4.34,7.62 4.38,7.54 4.45,7.5L11.89,3.21C11.95,3.17 12.05,3.17 12.11,3.21L19.55,7.5C19.62,7.54 19.66,7.62 19.66,7.71V16.29C19.66,16.37 19.62,16.45 19.55,16.5L12.11,20.79C12.05,20.83 11.95,20.83 11.88,20.79L10,19.65C9.92,19.62 9.84,19.61 9.79,19.64C9.26,19.94 9.16,20 8.67,20.15C8.55,20.19 8.36,20.26 8.74,20.47L11.22,21.94C11.46,22.08 11.72,22.15 12,22.15C12.28,22.15 12.54,22.08 12.78,21.94L20.22,17.65C20.7,17.37 21,16.85 21,16.29V7.71C21,7.15 20.7,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.28,1.85 12,1.85M14,8C11.88,8 10.61,8.89 10.61,10.39C10.61,12 11.87,12.47 13.91,12.67C16.34,12.91 16.53,13.27 16.53,13.75C16.53,14.58 15.86,14.93 14.3,14.93C12.32,14.93 11.9,14.44 11.75,13.46C11.73,13.36 11.64,13.28 11.53,13.28H10.57C10.45,13.28 10.36,13.37 10.36,13.5C10.36,14.74 11.04,16.24 14.3,16.24C16.65,16.24 18,15.31 18,13.69C18,12.08 16.92,11.66 14.63,11.35C12.32,11.05 12.09,10.89 12.09,10.35C12.09,9.9 12.29,9.3 14,9.3C15.5,9.3 16.09,9.63 16.32,10.66C16.34,10.76 16.43,10.83 16.53,10.83H17.5C17.55,10.83 17.61,10.81 17.65,10.76C17.69,10.72 17.72,10.66 17.7,10.6C17.56,8.82 16.38,8 14,8Z"
		/>
	</svg>
)

export const NextJsLogo = ({ size, color }) => (
	<svg
		width={size}
		height={{ size }}
		viewBox="0 0 512 309"
		version="1.1"
		preserveAspectRatio="xMidYMid"
	>
		<g>
			<path
				d="M120.81043,80.5613102 L217.378325,80.5613102 L217.378325,88.2366589 L129.662487,88.2366589 L129.662487,146.003758 L212.147564,146.003758 L212.147564,153.679106 L129.662487,153.679106 L129.662487,217.101725 L218.384241,217.101725 L218.384241,224.777073 L120.81043,224.777073 L120.81043,80.5613102 Z M226.0292,80.5613102 L236.289538,80.5613102 L281.756922,143.983929 L328.230222,80.5613102 L391.441486,0 L287.591232,150.649363 L341.105941,224.777073 L330.443237,224.777073 L281.756922,157.314798 L232.869425,224.777073 L222.407904,224.777073 L276.324978,150.649363 L226.0292,80.5613102 Z M344.928421,88.2366588 L344.928421,80.5613102 L454.975585,80.5613102 L454.975585,88.2366589 L404.27744,88.2366589 L404.27744,224.777073 L395.425382,224.777073 L395.425382,88.2366589 L344.928421,88.2366588 Z M1.42108547e-14,80.5613102 L11.0650714,80.5613102 L163.64593,308.884007 L100.591558,224.777073 L9.25442331,91.4683847 L8.85205708,224.777073 L1.42108547e-14,224.777073 L1.42108547e-14,80.5613102 Z M454.083705,214.785469 C452.275167,214.785469 450.918762,213.38418 450.918762,211.573285 C450.918762,209.762388 452.275167,208.361099 454.083705,208.361099 C455.913774,208.361099 457.248648,209.762388 457.248648,211.573285 C457.248648,213.38418 455.913774,214.785469 454.083705,214.785469 Z M462.781915,206.334618 L467.518563,206.334618 C467.583153,208.900055 469.456284,210.624719 472.212151,210.624719 C475.290972,210.624719 477.03492,208.770705 477.03492,205.29982 L477.03492,183.310363 L481.85769,183.310363 L481.85769,205.321379 C481.85769,211.573285 478.240613,215.173518 472.255212,215.173518 C466.635824,215.173518 462.781915,211.681076 462.781915,206.334618 Z M488.166045,206.054362 L492.945754,206.054362 C493.354828,209.007848 496.239878,210.883419 500.395211,210.883419 C504.270652,210.883419 507.11264,208.878498 507.11264,206.119036 C507.11264,203.747625 505.304102,202.324777 501.191828,201.354653 L497.187209,200.384531 C491.56782,199.069474 489.005723,196.353129 489.005723,191.782772 C489.005723,186.24229 493.527071,182.555823 500.30909,182.555823 C506.617445,182.555823 511.224912,186.24229 511.504805,191.480955 L506.811217,191.480955 C506.359083,188.613703 503.861576,186.824365 500.244499,186.824365 C496.43365,186.824365 493.893085,188.656819 493.893085,191.459398 C493.893085,193.679901 495.52938,194.95184 499.577063,195.900406 L503.000368,196.741178 C509.373314,198.228702 512,200.815695 512,205.493846 C512,211.443935 507.392533,215.173518 500.029197,215.173518 C493.139526,215.173518 488.51053,211.6164 488.166045,206.054362 Z"
				fill={color}
				fillRule="nonzero"
			/>
		</g>
	</svg>
)

export const JavaScriptLogo = ({ size, color }) => (
	<svg height={size} width={size} role="img" viewBox="0 0 512 512">
		<rect width="512" height="512" rx="15%" fill="#f7df1e" />
		<path
			fill="#ffffff"
			d="m324,370c10,17 24,29 47,29 20,0 33,-10 33,-24 0,-16 -13,-22 -35,-32l-12,-5c-35,-15 -58,-33 -58,-72 0,-36 27,-64 70,-64 31,0 53,11 68,39l-37,24c-8,-15 -17,-21 -31,-21 -14,0 -23,9 -23,21 0,14 9,20 30,29l12,5c41,18 64,35 64,76 0,43 -34,67 -80,67 -45,0 -74,-21 -88,-49zm-170,4c8,13 14,25 31,25 16,0 26,-6 26,-30V203h48v164c0,50 -29,72 -72,72 -39,0 -61,-20 -72,-44z"
		/>
	</svg>
)

export const ReduxIcon = ({ size, color }) => (
	<svg
		height={size}
		width={size}
		viewBox="0 0 256 244"
		preserveAspectRatio="xMidYMid"
	>
		<path
			d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"
			fill={color}
		/>
	</svg>
)

export const SunIcon = ({ size, color }) => (
	<svg height={size} width={size} viewBox="0 0 24 24">
		<path
			fill={color}
			d="M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z"
		/>
	</svg>
)

export const MoonIcon = ({ size, color }) => (
	<svg height={size} width={size} viewBox="0 0 24 24">
		<path
			fill={color}
			d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z"
		/>
	</svg>
)
