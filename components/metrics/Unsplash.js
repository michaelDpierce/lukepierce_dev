import MetricCard from "./Card";
import { SimpleGrid } from "@chakra-ui/core";
import { UNSPLASH_USER } from "@/lib/constants";
import fetcher from "@/lib/fetcher";
import format from "@/lib/formatNumber";
import useSWR from "swr";

const Unsplash = () => {
  const { data } = useSWR("/api/unsplash", fetcher);

  const downloads = format(data?.downloads);
  const views = format(data?.views);
  const link = `https://unsplash.com/@${UNSPLASH_USER}`;

  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={4} mb={4}>
      <MetricCard header="Unsplash Downloads" link={link} metric={downloads} />
      <MetricCard header="Unsplash Views" link={link} metric={views} />
    </SimpleGrid>
  );
};

export default Unsplash;
