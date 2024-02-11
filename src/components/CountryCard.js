import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CountryCard = ({
  countryData,
  index,
  expandedIndex,
  onExpandClick,
  expandedClass,
}) => {
  //determine whether the card should be in an expanded state or not
  const isExpanded = expandedIndex === index;

  const handleExpandClick = () => {
    onExpandClick(index);
  };
  return (
    <Card className={expandedClass}>
      {countryData && (
        <>
          <CardHeader
            avatar={
              <Avatar
                src={countryData?.flags.svg}
                alt={countryData?.flags.alt}
              />
            }
            title={countryData?.name.common}
            subheader={`Official name: ${countryData?.name?.official || "N/A"}`}
            action={
              <IconButton
                onClick={handleExpandClick}
                aria-expanded={isExpanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            }
          />
          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <CardContent>
              <img src={countryData?.flags.png} alt={countryData?.flags.alt} />

              <Typography variant="body1" color="textSecondary" component="p">
                <strong>Capital:</strong> {countryData?.capital || "N/A"}
              </Typography>

              <Typography variant="body1" color="textSecondary" component="p">
                <strong>Population:</strong> {countryData?.population || "N/A"}
              </Typography>

              <Typography variant="body1" color="textSecondary" component="p">
                <strong>Region:</strong> {countryData?.region || "N/A"}
              </Typography>

              <Typography variant="body1" color="textSecondary" component="p">
                <strong>Subregion:</strong> {countryData?.subregion || "N/A"}
              </Typography>

              <Typography variant="body1" color="textSecondary" component="p">
                <strong>Languages:</strong>{" "}
                {Object.values(countryData?.languages || {}).join(", ")}
              </Typography>

              <Typography variant="body1" color="textSecondary" component="p">
                <strong>Currencies:</strong>{" "}
                {Object.values(countryData?.currencies || {})
                  .map((currency) => `${currency.name} - ${currency.symbol}`)
                  .join(", ")}
              </Typography>
            </CardContent>
          </Collapse>
        </>
      )}
    </Card>
  );
};

export default CountryCard;
