'use client'

interface HeadingProps {
  title: string;
  description: string
}

const Heading = ({title, description}:HeadingProps) => {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight">
        {title}
      </h2>
      <p className="text-muted-foreground text-sm">
      {description}
      </p>
    </div>
  )
}

export default Heading