<template>
  <!-- <?xml version="1.0" encoding="iso-8859-1"?> -->
  <!-- Generator: Adobe Illustrator 25.4.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <svg
  id="clock-area"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 595.276 841.89"
    style="enable-background: new 0 0 595.276 841.89"
    xml:space="preserve"
  >
    <g id="background">
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="72.8675"
        y1="321.1928"
        x2="505.7831"
        y2="321.1928"
      >
        <stop offset="0" style="stop-color: #79a8da" />
        <stop offset="0" style="stop-color: #7aa8da" />
        <stop offset="0" style="stop-color: #8eb2de" />
        <stop offset="0" style="stop-color: #95b6e0" />
        <stop offset="0.2017" style="stop-color: #98b7e0" />
        <stop offset="0.3087" style="stop-color: #a0bce3" />
        <stop offset="0.3932" style="stop-color: #adc5e7" />
        <stop offset="0.466" style="stop-color: #bfd2ed" />
        <stop offset="0.4719" style="stop-color: #c1d3ed" />
        <stop offset="0.5221" style="stop-color: #9db9e1" />
        <stop offset="0.5753" style="stop-color: #7ba3d6" />
        <stop offset="0.6332" style="stop-color: #5e92cd" />
        <stop offset="0.6967" style="stop-color: #4386c7" />
        <stop offset="0.7684" style="stop-color: #297ec2" />
        <stop offset="0.8554" style="stop-color: #1079c0" />
        <stop offset="1" style="stop-color: #0178bf" />
      </linearGradient>
      <circle
        style="
          fill: none;
          stroke: url(#SVGID_1_);
          stroke-width: 4;
          stroke-miterlimit: 10;
        "
        cx="289.325"
        cy="321.193"
        r="214.458"
      />
      <circle style="fill: none" cx="289.325" cy="321.193" r="180.756" />
      <g id="_x31_1732.psd">
        <defs>
          <rect
            id="SVGID_00000151524962697182552440000006588959000222645399_"
            x="52.55"
            y="84.417"
            width="473.551"
            height="473.551"
          />
        </defs>
        <clipPath
          id="SVGID_00000065074412663899364330000012446382655804457369_"
        >
          <use
            xlink:href="#SVGID_00000151524962697182552440000006588959000222645399_"
            style="overflow: visible"
          />
        </clipPath>
        <g
          style="
            clip-path: url(#SVGID_00000065074412663899364330000012446382655804457369_);
          "
        >
          <image
            style="overflow: visible"
            width="782"
            height="781"
            id="_x31_1732"
            xlink:href="437B618AEAD62E4C.png"
            transform="matrix(0.4933 0 0 0.4933 95.9586 128.8126)"
          ></image>
        </g>
      </g>
      <rect
        x="52.55"
        y="84.417"
        style="fill: none"
        width="473.551"
        height="473.551"
      />
    </g>
    <g id="hands">
      <path
        id="hour"
        style="fill: #658ac7"
        d="M289.325,153.835l-2.56,167.015c0,1.414,1.146,2.56,2.56,2.56c1.414,0,2.56-1.146,2.56-2.56
		L289.325,153.835z"
      />
      <path
        id="min"
        style="fill: #658ac7"
        d="M174.279,259.329l114.315,64.251c0.976,0.529,2.196,0.167,2.725-0.809
		c0.529-0.976,0.167-2.196-0.809-2.725L174.279,259.329z"
      />
      <path
        id="sec"
        style="fill: #658ac7"
        d="M173.064,443.451l115.585-120.558c0.976-1.024,1.605-2.008,1.405-2.198s-1.152,0.485-2.128,1.509
		L173.064,443.451z"
      />
    </g>
  </svg>
</template>
<style lang="scss" scoped>
#clock-area {
  width: 800px;
  height: 700px;
}

#hour {
  animation: r1 60s linear infinite;
  transform-origin: 48.5% 38%;
}

#min {
	animation: r1 1s linear infinite;
  transform-origin: 48.5% 38%;
}

@keyframes r1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>