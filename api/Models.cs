using Azure.Search.Documents.Models;
using System.Text.Json.Serialization;

namespace WebSearch.Models
{
    public class RequestBodyLookUp
    {
        [JsonPropertyName("id")]
        public string Id { get; set; }
    }

    public class RequestBodySuggest
    {
        [JsonPropertyName("q")]
        public string SearchText { get; set; }

        [JsonPropertyName("top")]
        public int Size { get; set; }

        [JsonPropertyName("suggester")]
        public string SuggesterName { get; set; }
    }

    public class RequestBodySearch
    {
        [JsonPropertyName("q")]
        public string SearchText { get; set; }

        [JsonPropertyName("skip")]
        public int Skip { get; set; }

        [JsonPropertyName("top")]
        public int Size { get; set; }

        [JsonPropertyName("filters")]
        public List<SearchFilter> Filters { get; set; }
    }

    public class SearchFilter
    {
        public string field { get; set; }
        public string value { get; set; }
    }

    public class FacetValue
    {
        public string value { get; set; }
        public long? count { get; set; }
    }

    class SearchOutput
    {
        [JsonPropertyName("count")]
        public long? Count { get; set; }
        [JsonPropertyName("results")]
        public List<SearchResult<SearchDocument>> Results { get; set; }
        [JsonPropertyName("facets")]
        public Dictionary<String, IList<FacetValue>> Facets { get; set; }
    }
    class LookupOutput
    {
        [JsonPropertyName("document")]
        public SearchDocument Document { get; set; }
    }
    public class AmlDocsModel
    {
        public string id { get; set; }
        public string docName { get; set; }
        public string pageNumber { get; set; }
        public string title { get; set; }
        public string content { get; set; }
        public string category { get; set; }
        public string tags { get; set; }
        public string lastUpdated { get; set; }
        
       
    }
}

