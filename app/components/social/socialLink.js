export default function SocialLink({ href='#', target = '_blank', children }) {
    return (
        <a
      href={href}
      target={target}
      rel="noopener"
      className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
    >
        {children}
    </a>
    )
}