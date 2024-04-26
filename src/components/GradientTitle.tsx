function GradientTitle(props: GradientTitleProps) {
  const { title, subtitle } = props;

  return (
    <div className='gradient-title'>
      <div className='title'> {title} </div>
      <div className='subtitle'>{subtitle}</div>
    </div>
  );
}

export default GradientTitle;
