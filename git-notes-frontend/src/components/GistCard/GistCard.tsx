import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import type { GistType } from "../../types/gist.type";
import type { GistDetailsType } from "../../types/gistDetails.type";
import { getGist } from "../../services/github/gistsService";
import OwnerHeader from "../OwnerHeader/OwnerHeader";
import { CustomCard, CardContent } from './GistCard.styles';

type GistCardProps = {
  gist: GistType;
}

const GistCard = ({ gist }: GistCardProps) => {
  const [gistDetails, setGistDetails] = useState<GistDetailsType>();

  useEffect(() => {
    getGist(gist.id)
      .then(resp => setGistDetails(resp))
      .catch(err => console.error(err))
  }, []);

  if (!gistDetails) {
    return <p>Loading...</p>
  }

  return (
    <CustomCard>
      <Link to={`/gists/${gist.id}`}>
        <CardContent>
          {Object.values(gistDetails.files)[0].content}
        </CardContent>
        <OwnerHeader gistDetails={gistDetails} />
      </Link>
    </CustomCard>
  );
};

export default GistCard;
