<template>
  <!-- <?xml version="1.0" encoding="iso-8859-1"?> -->
  <!-- Generator: Adobe Illustrator 25.4.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <!-- <?xml version="1.0" encoding="iso-8859-1"?> -->
  <!-- Generator: Adobe Illustrator 25.4.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 595.276 841.89"
    style="enable-background: new 0 0 595.276 841.89"
    xml:space="preserve"
  >
    <g id="&#x30EC;&#x30A4;&#x30E4;&#x30FC;_1"></g>
    <g id="&#x30EC;&#x30A4;&#x30E4;&#x30FC;_2">
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="81.1802"
        y1="420.945"
        x2="514.0958"
        y2="420.945"
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
        cx="297.638"
        cy="420.945"
        r="214.458"
      />
      <circle style="fill: none" cx="297.638" cy="420.945" r="180.756" />
      <g id="_x31_1732.psd">
        <defs>
          <rect
            id="SVGID_00000099632460144920978260000011259325469127528325_"
            x="60.862"
            y="184.169"
            width="473.551"
            height="473.551"
          />
        </defs>
        <clipPath
          id="SVGID_00000057832089531972670530000017596846334727509913_"
        >
          <use
            xlink:href="#SVGID_00000099632460144920978260000011259325469127528325_"
            style="overflow: visible"
          />
        </clipPath>
        <g
          style="
            clip-path: url(#SVGID_00000057832089531972670530000017596846334727509913_);
          "
        >
          <image
            id="_x31_1732"
            style="overflow: visible"
            width="782"
            height="781"
            xlink:href="437B618AEAD62E4F.png"
            transform="matrix(0.4933 0 0 0.4933 104.2713 228.5648)"
          ></image>
        </g>
      </g>
      <rect
        x="60.862"
        y="184.169"
        style="fill: none"
        width="473.551"
        height="473.551"
      />
      <path
        id="hour"
        style="fill: #658ac7"
        d="M297.638,253.587l-2.56,167.015c0,1.414,1.146,2.56,2.56,2.56c1.414,0,2.56-1.146,2.56-2.56
		L297.638,253.587z"
      />
      <path
        id="sec"
        style="fill: #658ac7"
        d="M181.377,543.203l115.585-120.558c0.976-1.024,1.604-2.008,1.405-2.198s-1.152,0.485-2.128,1.509
		L181.377,543.203z"
      />
      <path
        id="min"
        style="fill: #658ac7"
        d="M182.592,359.081l114.315,64.251c0.976,0.529,2.196,0.167,2.725-0.809
		c0.529-0.976,0.167-2.196-0.809-2.725L182.592,359.081z"
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
  transform-origin: center center;
}

#min {
  animation: r1 1s linear infinite;
  transform-origin: center center;
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