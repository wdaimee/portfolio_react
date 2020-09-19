import React from 'react';

export const Logo: React.FC<{className?: string}> = props => <svg {...props } width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.3203 39.3359C22.0443 40.9505 20.625 42.474 19.0625 43.9062C17.5 45.3385 15.9245 46.6797 14.3359 47.9297C14.2578 47.9818 14.1016 48.0599 13.8672 48.1641C13.6589 48.2422 13.5156 48.2812 13.4375 48.2812C13.1771 48.2812 12.9167 48.2161 12.6562 48.0859C12.3958 47.9557 12.2656 47.7344 12.2656 47.4219V47.3438L14.7266 35.8984V35.5078C14.8568 34.8568 14.987 34.2708 15.1172 33.75C15.2474 33.2292 15.3516 32.7474 15.4297 32.3047C15.5339 31.8359 15.599 31.3672 15.625 30.8984C15.6771 30.4297 15.7031 29.9349 15.7031 29.4141C15.7031 29.1016 15.6901 28.8151 15.6641 28.5547C15.6641 28.2682 15.612 27.9818 15.5078 27.6953C15.4557 27.6953 15.3516 27.6953 15.1953 27.6953C15.0651 27.6953 14.974 27.6953 14.9219 27.6953C14.375 27.6953 13.8672 27.8646 13.3984 28.2031C12.9297 28.5417 12.487 28.9193 12.0703 29.3359C11.6536 29.7266 11.263 30.0911 10.8984 30.4297C10.5339 30.7682 10.1562 30.9375 9.76562 30.9375C9.47917 30.9375 9.24479 30.8333 9.0625 30.625C8.88021 30.4167 8.78906 30.1693 8.78906 29.8828C8.78906 29.4661 9.04948 28.9974 9.57031 28.4766C10.0911 27.9557 10.7161 27.474 11.4453 27.0312C12.1745 26.5625 12.9167 26.1849 13.6719 25.8984C14.4271 25.5859 15.026 25.4297 15.4688 25.4297C15.9896 25.4297 16.4062 25.5469 16.7188 25.7812C17.0573 25.9896 17.3177 26.263 17.5 26.6016C17.6823 26.9401 17.8125 27.3307 17.8906 27.7734C17.9688 28.1901 18.0078 28.6198 18.0078 29.0625V29.8047L14.9219 44.6484H15.1562C15.1823 44.6484 15.2995 44.5703 15.5078 44.4141C15.7422 44.2318 16.0026 44.0234 16.2891 43.7891C16.5755 43.5286 16.875 43.2682 17.1875 43.0078C17.526 42.7474 17.7995 42.5391 18.0078 42.3828C18.5286 41.888 18.9844 41.4453 19.375 41.0547C19.7656 40.638 20.1302 40.2214 20.4688 39.8047C20.8073 39.388 21.1328 38.9323 21.4453 38.4375C21.7839 37.9427 22.1615 37.3568 22.5781 36.6797C22.6042 36.6016 22.6823 36.4453 22.8125 36.2109C22.9427 35.9505 23.0859 35.6771 23.2422 35.3906C23.3984 35.0781 23.5547 34.7786 23.7109 34.4922C23.8932 34.1797 24.0104 33.9453 24.0625 33.7891C24.2448 33.5026 24.401 33.2422 24.5312 33.0078C24.6615 32.7474 24.9219 32.6172 25.3125 32.6172C25.651 32.6172 25.9115 32.7344 26.0938 32.9688C26.276 33.2031 26.3672 33.4766 26.3672 33.7891C26.3672 34.9089 26.263 36.0286 26.0547 37.1484C25.8724 38.2682 25.7812 39.401 25.7812 40.5469C25.7812 40.6771 25.7812 40.8724 25.7812 41.1328C25.7812 41.3672 25.7812 41.6016 25.7812 41.8359C25.8073 42.0703 25.8203 42.2786 25.8203 42.4609C25.8203 42.6432 25.8203 42.7474 25.8203 42.7734C25.8203 42.7995 25.8333 42.9297 25.8594 43.1641C25.8854 43.3984 25.9115 43.6458 25.9375 43.9062C25.9896 44.1406 26.0286 44.388 26.0547 44.6484C26.1068 44.9089 26.1458 45.1172 26.1719 45.2734C26.1719 45.2995 26.1979 45.4297 26.25 45.6641C26.3021 45.8724 26.3672 46.1068 26.4453 46.3672C26.5234 46.6016 26.6146 46.8359 26.7188 47.0703C26.849 47.2786 26.9922 47.3828 27.1484 47.3828H27.2266C27.2526 47.3828 27.2786 47.3698 27.3047 47.3438C27.6953 47.2396 28.2161 46.9141 28.8672 46.3672C29.5182 45.8203 30.2083 45.1432 30.9375 44.3359C31.6667 43.5286 32.3698 42.6562 33.0469 41.7188C33.75 40.7812 34.3229 39.8568 34.7656 38.9453C34.7917 38.8932 34.8828 38.5677 35.0391 37.9688C35.2214 37.3698 35.4297 36.6797 35.6641 35.8984C35.8984 35.1172 36.1198 34.3229 36.3281 33.5156C36.5625 32.6823 36.7318 32.0312 36.8359 31.5625C36.862 31.4844 36.901 31.2891 36.9531 30.9766C37.0052 30.6641 37.0573 30.3385 37.1094 30C37.1615 29.6354 37.2135 29.2839 37.2656 28.9453C37.3438 28.5807 37.3958 28.2943 37.4219 28.0859V27.6953C37.4219 27.5391 37.4219 27.4089 37.4219 27.3047C37.4219 27.2005 37.3438 27.0964 37.1875 26.9922V25.8203C37.1875 25.5339 37.1875 25.2214 37.1875 24.8828C37.2135 24.5182 37.2656 24.1797 37.3438 23.8672C37.4479 23.5547 37.6042 23.2943 37.8125 23.0859C38.0208 22.8776 38.3333 22.7734 38.75 22.7734C39.1406 22.7734 39.4141 22.9297 39.5703 23.2422C39.7526 23.5286 39.8568 23.8802 39.8828 24.2969C39.9089 24.6875 39.9089 25.0911 39.8828 25.5078C39.8568 25.8984 39.8438 26.1849 39.8438 26.3672C40.8073 26.3672 41.7839 26.3672 42.7734 26.3672C43.763 26.3411 44.7396 26.276 45.7031 26.1719C46.6667 26.0677 47.6172 25.8854 48.5547 25.625C49.4922 25.3646 50.4167 24.987 51.3281 24.4922H52.4609C52.4609 24.987 52.2005 25.4297 51.6797 25.8203C51.1849 26.2109 50.5339 26.5755 49.7266 26.9141C48.9453 27.2266 48.0599 27.5 47.0703 27.7344C46.0807 27.9688 45.1042 28.1641 44.1406 28.3203C43.1771 28.4766 42.2786 28.5938 41.4453 28.6719C40.638 28.724 40 28.724 39.5312 28.6719L39.3359 29.0625L37.1875 38.0078C36.7708 39.0234 36.3281 40 35.8594 40.9375C35.4167 41.849 34.8568 42.7604 34.1797 43.6719C33.5026 44.5833 32.6693 45.5208 31.6797 46.4844C30.7161 47.4219 29.5052 48.4115 28.0469 49.4531C27.6823 49.8438 27.1875 50.0391 26.5625 50.0391C26.1719 50.0391 25.8203 49.8698 25.5078 49.5312C25.1953 49.1927 24.9219 48.7891 24.6875 48.3203C24.4531 47.8516 24.2708 47.3698 24.1406 46.875C24.0104 46.3542 23.9323 45.9375 23.9062 45.625L23.3203 39.3359ZM48.9062 48.5938C48.9062 48.4635 48.9062 48.3464 48.9062 48.2422C48.9323 48.138 48.9974 48.0339 49.1016 47.9297C49.1536 47.9297 49.2318 47.9297 49.3359 47.9297C49.4661 47.9036 49.5573 47.8906 49.6094 47.8906C50.0781 47.8906 50.5208 47.9297 50.9375 48.0078C51.3802 48.0859 51.8359 48.125 52.3047 48.125C53.1641 48.125 53.9844 48.0078 54.7656 47.7734C55.5469 47.5391 56.237 47.2005 56.8359 46.7578C57.4609 46.2891 57.9557 45.7161 58.3203 45.0391C58.6849 44.3359 58.8672 43.5156 58.8672 42.5781C58.8672 42.0312 58.776 41.4844 58.5938 40.9375C58.4375 40.3906 58.2161 39.8568 57.9297 39.3359C57.6432 38.8151 57.3177 38.3333 56.9531 37.8906C56.5885 37.4219 56.1979 37.0182 55.7812 36.6797L47.0312 29.4531C46.9792 29.375 46.849 29.2448 46.6406 29.0625C46.4583 28.8542 46.3151 28.724 46.2109 28.6719L46.1719 28.75C46.1458 28.75 46.1198 28.75 46.0938 28.75H46.0547V44.1016L45.8594 46.9531C45.8594 47.1875 45.7422 47.3698 45.5078 47.5C45.2734 47.6042 45.0781 47.6823 44.9219 47.7344C44.6094 47.7604 44.375 47.7083 44.2188 47.5781C44.0885 47.4479 43.9844 47.2656 43.9062 47.0312C43.8281 46.7969 43.7891 46.5495 43.7891 46.2891C43.7891 46.0286 43.7891 45.8073 43.7891 45.625V25.8203C43.2682 25.013 42.8385 24.1927 42.5 23.3594C42.1875 22.526 42.0312 21.6276 42.0312 20.6641C42.0312 20.4297 42.0443 20.1172 42.0703 19.7266C42.0964 19.3359 42.1484 18.9583 42.2266 18.5938C42.3307 18.2031 42.487 17.8776 42.6953 17.6172C42.9297 17.3307 43.2422 17.1875 43.6328 17.1875C43.8932 17.1875 44.0755 17.2917 44.1797 17.5C44.3099 17.7083 44.375 17.9297 44.375 18.1641C44.375 18.5547 44.3359 18.9193 44.2578 19.2578C44.1797 19.5964 44.1406 19.9609 44.1406 20.3516C44.1406 20.5859 44.1276 20.8854 44.1016 21.25C44.1016 21.6146 44.1797 21.9271 44.3359 22.1875C44.362 21.875 44.375 21.4583 44.375 20.9375C44.401 20.4167 44.4661 19.9089 44.5703 19.4141C44.6745 18.9193 44.8438 18.4896 45.0781 18.125C45.3385 17.7604 45.7292 17.5781 46.25 17.5781C46.4583 17.5781 46.6406 17.6302 46.7969 17.7344C46.9531 17.8125 47.0312 17.9688 47.0312 18.2031V22.1875C46.7188 22.526 46.5365 22.9167 46.4844 23.3594C46.4583 23.776 46.4453 24.1927 46.4453 24.6094V25.1172C46.4453 25.1953 46.4583 25.2995 46.4844 25.4297C46.5104 25.5078 46.5625 25.612 46.6406 25.7422C46.7448 25.8724 46.849 26.0286 46.9531 26.2109C47.0833 26.3672 47.2005 26.5234 47.3047 26.6797C47.4089 26.8099 47.5 26.9141 47.5781 26.9922L56.3672 34.1797C57.6953 35.2995 58.7891 36.5625 59.6484 37.9688C60.5078 39.349 60.9375 40.9115 60.9375 42.6562C60.9375 43.8021 60.7031 44.8307 60.2344 45.7422C59.7656 46.6276 59.1406 47.3958 58.3594 48.0469C57.5781 48.6719 56.6797 49.1536 55.6641 49.4922C54.6745 49.8307 53.6458 50 52.5781 50C52.3698 50 52.0573 49.987 51.6406 49.9609C51.224 49.9349 50.8073 49.8828 50.3906 49.8047C50 49.7266 49.6484 49.5964 49.3359 49.4141C49.0495 49.2318 48.9062 48.9583 48.9062 48.5938Z" fill="currentColor"/>
    <circle cx="35" cy="35" r="34" stroke="currentColor" strokeWidth="3"/>
</svg>
