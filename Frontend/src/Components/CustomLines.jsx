import PropTypes from 'prop-types';

const CustomLines = ({ cx, cy, innerRadius, outerRadius, startAngle, endAngle }) => {
  const numLines = 10;
  const lineLength = (outerRadius - innerRadius) / numLines;
  
  const lines = Array.from({ length: numLines }, (_, index) => {
    const radius = innerRadius + index * lineLength;
    const x1 = cx + radius * Math.cos(startAngle);
    const y1 = cy + radius * Math.sin(startAngle);
    const x2 = cx + radius * Math.cos(endAngle);
    const y2 = cy + radius * Math.sin(endAngle);
    
    return <line key={`line-${index}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fff" />;
  });

  return <g>{lines}</g>;
};

CustomLines.propTypes = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  innerRadius: PropTypes.number.isRequired,
  outerRadius: PropTypes.number.isRequired,
  startAngle: PropTypes.number.isRequired,
  endAngle: PropTypes.number.isRequired,
};

export default CustomLines;
