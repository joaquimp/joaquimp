import SocialLink from "./socialLink";

export default function Twitter({
  size = 24,
  href = "https://twitter.com/joaquimpfilho",
  target = "_blank",
}) {
  return (
    <SocialLink href={href} target={target}>
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M0.0585144 1L9.32465 13.3897L0 23.463H2.0986L10.2623 14.6437L16.8584 23.463H24L14.2125 10.3764L22.8918 1H20.7932L13.2748 9.12246L7.20014 1H0.0585144ZM3.14467 2.54583H6.42555L20.9134 21.917H17.6325L3.14467 2.54583Z" />
      </svg>
    </SocialLink>
  );
}
