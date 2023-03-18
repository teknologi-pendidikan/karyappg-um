import * as React from "react";

type Props = {
  height?: number;
  width?: number;
  fill?: string;
};

const LogoDPTSI = (props: Props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 80 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#a)">
      <path
        d="M9.048 25.384c-1.685 0-3.19-.395-4.512-1.184A8.787 8.787 0 0 1 1.4 20.904C.632 19.517.248 17.98.248 16.296c0-1.707.384-3.243 1.152-4.608a8.855 8.855 0 0 1 3.136-3.264c1.344-.81 2.837-1.216 4.48-1.216 1.323 0 2.496.267 3.52.8 1.045.512 1.867 1.237 2.464 2.176l-.64.864V.776h4.192V25h-3.968v-3.36l.448.832c-.597.938-1.43 1.664-2.496 2.176-1.067.49-2.23.736-3.488.736Zm.448-3.84c.96 0 1.803-.224 2.528-.672a4.603 4.603 0 0 0 1.696-1.856c.427-.79.64-1.696.64-2.72 0-1.003-.213-1.899-.64-2.688-.405-.81-.97-1.44-1.696-1.888-.725-.448-1.568-.672-2.528-.672-.939 0-1.781.235-2.528.704a4.756 4.756 0 0 0-1.76 1.856c-.405.768-.608 1.664-.608 2.688 0 1.024.203 1.93.608 2.72a4.757 4.757 0 0 0 1.76 1.856c.747.448 1.59.672 2.528.672ZM22.452 31.4V7.592h3.936v3.456l-.384-.864a6.005 6.005 0 0 1 2.432-2.176c1.024-.533 2.208-.8 3.552-.8 1.643 0 3.125.405 4.448 1.216a8.854 8.854 0 0 1 3.136 3.264c.79 1.365 1.184 2.901 1.184 4.608 0 1.685-.384 3.221-1.152 4.608a8.786 8.786 0 0 1-3.136 3.296c-1.323.79-2.827 1.184-4.512 1.184-1.259 0-2.421-.245-3.488-.736a6.185 6.185 0 0 1-2.496-2.176l.672-.832v9.76h-4.192Zm9.024-9.856c.96 0 1.813-.224 2.56-.672a4.534 4.534 0 0 0 1.728-1.856c.427-.79.64-1.696.64-2.72 0-1.024-.213-1.92-.64-2.688a4.533 4.533 0 0 0-1.728-1.856c-.747-.47-1.6-.704-2.56-.704-.917 0-1.75.224-2.496.672-.725.448-1.301 1.077-1.728 1.888-.405.79-.608 1.685-.608 2.688 0 1.024.203 1.93.608 2.72a4.835 4.835 0 0 0 1.728 1.856 4.758 4.758 0 0 0 2.496.672ZM45.4 25V11.336h-3.008V7.592H45.4V3.624h4.192v3.968h4v3.744h-4v9.952h4.064V25H45.4Zm18.082.384c-1.856 0-3.477-.438-4.864-1.312-1.365-.896-2.304-2.101-2.816-3.616l3.136-1.504c.448.981 1.067 1.75 1.856 2.304a4.656 4.656 0 0 0 2.688.832c.768 0 1.376-.17 1.824-.512.448-.341.672-.79.672-1.344 0-.341-.096-.619-.288-.832-.17-.235-.416-.427-.736-.576a4.596 4.596 0 0 0-.992-.416l-2.848-.8c-1.472-.427-2.592-1.078-3.36-1.952-.746-.875-1.12-1.91-1.12-3.104 0-1.067.267-1.995.8-2.784.555-.81 1.312-1.44 2.272-1.888.982-.448 2.102-.672 3.36-.672 1.643 0 3.094.395 4.352 1.184 1.259.79 2.155 1.899 2.688 3.328l-3.2 1.504a3.857 3.857 0 0 0-1.504-1.888 4.173 4.173 0 0 0-2.368-.704c-.704 0-1.258.16-1.664.48-.405.32-.608.736-.608 1.248 0 .32.086.597.256.832.171.235.406.426.704.576.32.15.683.288 1.088.416l2.784.832c1.43.427 2.528 1.066 3.296 1.92.79.853 1.184 1.898 1.184 3.136 0 1.045-.277 1.973-.832 2.784-.554.79-1.322 1.408-2.304 1.856-.981.448-2.133.672-3.456.672ZM75.088 25V11.336h-2.752V7.592h6.944V25h-4.192Zm0-19.36V1.16h4.192v4.48h-4.192Z"
        fill={props.fill || "#3284FF"}
      />
      <path
        d="M30.125 31v-3.425h-1.04v-.3h2.4v.3H30.45V31h-.325Zm2.767.06c-.267 0-.504-.06-.71-.18a1.355 1.355 0 0 1-.49-.5 1.465 1.465 0 0 1-.175-.715c0-.263.056-.498.17-.705.113-.21.266-.375.46-.495.193-.12.41-.18.65-.18.183 0 .348.033.495.1.15.067.278.16.385.28.11.117.193.252.25.405a1.267 1.267 0 0 1 .07.695h-2.305v-.275h2.135l-.135.105a.927.927 0 0 0-.085-.52.888.888 0 0 0-.33-.37.846.846 0 0 0-.48-.14.895.895 0 0 0-.495.145.98.98 0 0 0-.355.39 1.122 1.122 0 0 0-.12.57c-.007.217.035.408.125.575.093.167.221.298.385.395a1.1 1.1 0 0 0 .555.14h.94v.28h-.94Zm1.84-.06v-3.785h.3v2.705l-.155-.015 1.57-1.56h.41l-1.07 1.07L36.957 31h-.375l-1.11-1.49.2.005-.72.74.08-.205V31h-.3Zm2.72 0v-2.655h1.085c.207 0 .383.04.53.12a.82.82 0 0 1 .345.345c.083.147.125.323.125.53V31h-.3v-1.66c0-.217-.063-.388-.19-.515-.123-.13-.293-.195-.51-.195h-.785V31h-.3Zm4.096.06a1.322 1.322 0 0 1-1.17-.675 1.465 1.465 0 0 1-.175-.715c0-.263.059-.5.175-.71.12-.21.28-.375.48-.495.204-.12.434-.18.69-.18a1.293 1.293 0 0 1 1.165.675c.117.207.175.443.175.71 0 .267-.06.505-.18.715a1.33 1.33 0 0 1-.485.495c-.2.12-.425.18-.675.18Zm0-.295c.19 0 .362-.047.515-.14a1.03 1.03 0 0 0 .37-.395 1.16 1.16 0 0 0 .135-.56 1.13 1.13 0 0 0-.135-.555 1.054 1.054 0 0 0-.365-.39.954.954 0 0 0-.52-.145.98.98 0 0 0-.525.145 1.005 1.005 0 0 0-.365.39 1.13 1.13 0 0 0-.135.555 1.09 1.09 0 0 0 .505.955.98.98 0 0 0 .52.14Zm2.666.265c-.2 0-.351-.048-.455-.145a.537.537 0 0 1-.15-.405v-3.265h.3v3.25c0 .2.11.3.33.3h.045v.265h-.07Zm1.924.03a1.322 1.322 0 0 1-1.17-.675 1.466 1.466 0 0 1-.175-.715c0-.263.059-.5.175-.71.12-.21.28-.375.48-.495.204-.12.434-.18.69-.18.254 0 .482.06.685.18.204.12.364.285.48.495.117.207.175.443.175.71 0 .267-.06.505-.18.715a1.33 1.33 0 0 1-.485.495c-.2.12-.425.18-.675.18Zm0-.295c.19 0 .362-.047.515-.14a1.03 1.03 0 0 0 .37-.395 1.16 1.16 0 0 0 .135-.56 1.13 1.13 0 0 0-.135-.555 1.053 1.053 0 0 0-.365-.39.954.954 0 0 0-.52-.145.98.98 0 0 0-.525.145 1.005 1.005 0 0 0-.365.39 1.13 1.13 0 0 0-.135.555 1.09 1.09 0 0 0 .505.955.98.98 0 0 0 .52.14ZM48.51 32.1v-.295h.99c.273 0 .49-.07.65-.21a.698.698 0 0 0 .24-.56v-.81l.054.07a1.1 1.1 0 0 1-.425.49c-.19.117-.401.175-.635.175-.246 0-.468-.06-.665-.18a1.3 1.3 0 0 1-.465-.485 1.395 1.395 0 0 1-.165-.675 1.323 1.323 0 0 1 .625-1.155c.197-.12.42-.18.67-.18.233 0 .444.058.63.175.187.113.33.267.43.46l-.055.095v-.67h.3v2.69c0 .213-.05.4-.15.56a.955.955 0 0 1-.415.37 1.36 1.36 0 0 1-.625.135h-.99Zm.884-1.44a.911.911 0 0 0 .5-.14 1 1 0 0 0 .355-.375c.087-.16.13-.335.13-.525s-.043-.363-.13-.52a1.008 1.008 0 0 0-.355-.375.911.911 0 0 0-.5-.14c-.19 0-.36.047-.51.14a.971.971 0 0 0-.35.375 1.09 1.09 0 0 0-.125.52c0 .19.042.365.125.525a.984.984 0 0 0 .345.375c.15.093.322.14.515.14Zm2.121.34v-2.655h.3V31h-.3Zm0-3.175v-.55h.3v.55h-.3ZM53.518 31v-3.725h1.25c.236 0 .445.047.625.14.18.093.32.225.42.395.103.17.155.367.155.59 0 .223-.052.42-.155.59-.1.167-.24.298-.42.395a1.32 1.32 0 0 1-.625.14h-.925V31h-.325Zm.325-1.775h.935c.17 0 .32-.033.45-.1a.774.774 0 0 0 .305-.29.863.863 0 0 0 .11-.44.809.809 0 0 0-.11-.43.74.74 0 0 0-.305-.285.934.934 0 0 0-.45-.105h-.935v1.65ZM57.8 31.06c-.268 0-.504-.06-.71-.18a1.355 1.355 0 0 1-.49-.5 1.465 1.465 0 0 1-.176-.715c0-.263.057-.498.17-.705.113-.21.267-.375.46-.495s.41-.18.65-.18c.183 0 .348.033.495.1.15.067.278.16.385.28.11.117.193.252.25.405a1.267 1.267 0 0 1 .07.695H56.6v-.275h2.135l-.135.105a.926.926 0 0 0-.085-.52.888.888 0 0 0-.33-.37.846.846 0 0 0-.48-.14.895.895 0 0 0-.495.145.981.981 0 0 0-.355.39 1.122 1.122 0 0 0-.12.57c-.007.217.035.408.125.575.093.167.222.298.385.395a1.1 1.1 0 0 0 .555.14h.94v.28h-.94Zm1.84-.06v-2.655h1.085c.206 0 .383.04.53.12a.82.82 0 0 1 .345.345c.083.147.125.323.125.53V31h-.3v-1.66c0-.217-.064-.388-.19-.515-.124-.13-.294-.195-.51-.195h-.785V31h-.3Zm4.056.06c-.247 0-.47-.06-.67-.18a1.316 1.316 0 0 1-.465-.5 1.471 1.471 0 0 1-.17-.71c0-.263.057-.5.17-.71.113-.21.268-.375.465-.495.2-.12.423-.18.67-.18.243 0 .46.058.65.175a1.1 1.1 0 0 1 .43.46l-.05.095v-1.8h.3V31h-.3v-.675l.05.07c-.093.207-.237.37-.43.49-.19.117-.407.175-.65.175Zm.01-.3a.955.955 0 0 0 .515-.14c.153-.097.275-.227.365-.39a1.16 1.16 0 0 0 .135-.56 1.13 1.13 0 0 0-.135-.555 1.015 1.015 0 0 0-.365-.385.93.93 0 0 0-.515-.145.92.92 0 0 0-.51.145.99.99 0 0 0-.355.385 1.16 1.16 0 0 0-.13.555c0 .207.043.393.13.56.087.163.205.293.355.39.15.093.32.14.51.14Zm2.149.24v-2.655h.3V31h-.3Zm0-3.175v-.55h.3v.55h-.3Zm2.318 3.235c-.246 0-.47-.06-.67-.18a1.318 1.318 0 0 1-.465-.5 1.471 1.471 0 0 1-.17-.71c0-.263.057-.5.17-.71a1.28 1.28 0 0 1 .465-.495c.2-.12.424-.18.67-.18.244 0 .46.058.65.175.19.113.334.267.43.46l-.05.095v-1.8h.3V31h-.3v-.675l.05.07c-.093.207-.236.37-.43.49-.19.117-.406.175-.65.175Zm.01-.3a.955.955 0 0 0 .515-.14c.154-.097.275-.227.365-.39a1.16 1.16 0 0 0 .135-.56 1.13 1.13 0 0 0-.135-.555 1.014 1.014 0 0 0-.365-.385.93.93 0 0 0-.515-.145.92.92 0 0 0-.51.145.99.99 0 0 0-.355.385c-.086.163-.13.348-.13.555 0 .207.044.393.13.56.087.163.205.293.355.39.15.093.32.14.51.14Zm2.15.24v-2.655h.3V31h-.3Zm0-3.175v-.55h.3v.55h-.3ZM71.456 31v-3.785h.3v2.705l-.155-.015 1.57-1.56h.41l-1.07 1.07L73.681 31h-.375l-1.11-1.49.2.005-.72.74.08-.205V31h-.3Zm3.48.06c-.167 0-.315-.032-.445-.095a.777.777 0 0 1-.31-.265.68.68 0 0 1-.115-.39.735.735 0 0 1 .36-.655 1.27 1.27 0 0 1 .495-.175l1.075-.18v.28l-.995.165c-.227.037-.387.105-.48.205a.497.497 0 0 0-.14.35c0 .143.053.26.16.35.11.09.248.135.415.135a.957.957 0 0 0 .505-.13.963.963 0 0 0 .335-.35.986.986 0 0 0 .12-.48v-.485c0-.217-.064-.388-.19-.515-.127-.13-.299-.195-.515-.195h-.905v-.285h.905c.206 0 .385.04.535.12a.82.82 0 0 1 .345.345c.083.147.125.323.125.53V31h-.3v-.555l.035.025a.807.807 0 0 1-.215.295 1.19 1.19 0 0 1-.8.295Zm2.106-.06v-2.655h1.085c.207 0 .383.04.53.12a.82.82 0 0 1 .345.345c.083.147.125.323.125.53V31h-.3v-1.66c0-.217-.063-.388-.19-.515-.123-.13-.293-.195-.51-.195h-.785V31h-.3Z"
        fill={props.fill || "#FBFBFB"}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h80v33H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default LogoDPTSI;
