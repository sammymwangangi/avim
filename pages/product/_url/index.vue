<template>
  <div class="tw-pt-16 lg:tw-pt-32">
    <section>
      <div
        class="tw-container tw-mx-auto"
      >
        <!-- crumbs -->

        <!-- Breadcrumb -->
        <nav id="breadcrumb" class="tw-flex tw-text-gray-700 tw-border tw-py-3 tw-px-5" aria-label="breadcrumb">
          <ol class="tw-list-none tw-no-underline tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3">
            <li class="tw-inline-flex tw-items-center">
              <a :href="'/'" class="tw-no-underline tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 tw-inline-flex tw-items-center dark:tw-text-gray-400 dark:hover:tw-text-white">
                <svg class="tw-w-4 tw-h-4 tw-mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                Home
              </a>
            </li>
            <li aria-current="page">
              <div class="tw-flex items-center">
                <svg class="tw-w-6 tw-h-6 tw-text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <span class="tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500">{{$route.params.url.replace(/-/g, ' ') | capitalize}}</span>
              </div>
            </li>
          </ol>
        </nav>
        
        <h1 class="alert alert-secondary tw-text-red-600 rounded-0 tw-capitalize clearfix">
          {{ raw_product.product.name || '' }}
        </h1>
        <!-- Product Details -->
        <div class="lg:tw-grid lg:tw-grid-cols-3 tw-gap-2 tw-bg-white tw-py-4">
          <div class="">
            <div
              class="tw-border-0 tw-text-center tw-items-center"
              id="product-image"
            >
              <img
                :src="`${raw_product.product.image_url}`"
                class=""
                :alt="`${raw_product.product.name}-nairobidrinks`"
                width="320"
                height="362"
              />
            </div>
          </div>
          
          <div class="product-quantity tw-px-4">
            <form>
              <div class="form-group">
                <label for="quantity">Quantity:</label>
                <input
                  type="number"
                  min="1"
                  id="quantity"
                  v-model="quantity"
                  class="form-control tw-rounded-md tw-border-gray-300"
                  value="1"
                />
              </div>
              <div class="form-group">
                <label for="productQuantity" class="sr-only"
                  >Product Quantity</label
                >
                <select
                  class="form-control tw-rounded-md tw-border-gray-300"
                  id="productQuantity"
                  @change="changedItem($event)"
                  v-model="price"
                >
                  <option
                    v-for="(quantity, index) in raw_product.product.quantities"
                    :selected="raw_product.product.quantities[0]"
                    :value="quantity"
                    :key="index"
                  >
                    {{ quantity.quantity }} @ {{ quantity.discount }}
                  </option>
                </select>
              </div>
              <div
                class="selected_data tw-py-2 tw-antialiased"
                style="font-family: 'Roboto', sans-serif"
              >
                <div class="tw-flex tw-space-x-2 tw-items-center">
                  <div class="tw-text-red-600">{{ quantity }}</div>
                  <div v-show="quantity > 1"> pieces of</div>
                  <div v-show="quantity <= 1"> piece of</div>
                  <div class="tw-text-green-600"> {{ price.quantity }} </div>
                  <div class="tw-flex">
                    @ {{ total | currency }}
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
              <div
                v-show="raw_product.product.available == false"
                class="tw-rounded-md tw-text-white tw-text-center tw-bg-red-600 tw-py-2"
              >
                Out of stock
              </div>
              <div
                class="tw-flex tw-px-4 tw-py-2"
              >
                <button
                  type="button"
                  v-b-modal="`wp-${raw_product.product.url}`"
                  @click="whatsAppInfo(raw_product.product)"
                  :disabled="raw_product.product.available == false"
                  class="modal-btn tw-bg-transparent border-none"
                  style="cursor: pointer; border: none;"
                >
                  <fa
                    :icon="['fab', 'whatsapp']"
                    title="WhatsApp Order"
                    style="font-size:1.5em; color:#28AB81;"
                  ></fa>
                </button>
                <button
                  type="button"
                  @click="addToCart(raw_product.product)"
                  :disabled="raw_product.product.available == false"
                  class="text-dark modal-btn tw-bg-transparent"
                  style="cursor: pointer;border: none;"
                >
                  <fa
                    :icon="['fas', 'cart-plus']"
                    title="cart"
                    style="font-size:1.5em;"
                  ></fa>
                </button>
                <span
                  class=""
                  @click="wishList(raw_product.product)"
                  style="cursor:pointer;"
                >
                  <b
                    v-if="
                      favorite.find(
                        (item) => item._id === raw_product.product._id
                      )
                    "
                  >
                    <fa
                      icon="heart"
                      title="favorite"
                      style="font-size:1.5em;color:#FF4081"
                    ></fa>
                  </b>
                  <b v-else>
                    <fa
                      :icon="['far', 'heart']"
                      title="favorite"
                      style="font-size:1.5em;color:#FF4081;"
                    ></fa>
                  </b>
                </span>
                <span
                  class="tw-ml-3 tw-text-blue-600 tw-cursor-pointer"
                  @click="share"
                  v-if="windowWidth <= 400"
                >
                  <b>
                    <fa icon="share-alt"></fa>
                  </b>
                </span>
              </div>
            </form>
            <!-- start whatsApp modal -->
            <WhatsAppOrder
              :product="raw_product.product"
              :active-product="raw_product.product"
              :selected-quantity="selectedQuantity"
              :price="price"
            >
            </WhatsAppOrder>
            <!-- end whatsApp modal -->
          </div>

          <!-- Table -->
          <div class="product-table lg:tw-flex lg:tw-flex-col tw-px-4 tw-py-2">
            <table class="tw-table-auto tw-w-full">
                  <tbody class="tw-text-sm">
                    <tr>
                      <td class="tw-p-2 tw-whitespace-nowrap">
                        <span class="tw-font-semibold">Product Name</span>
                      </td>
                      <td class="tw-p-2 tw-whitespace-wrap">{{ raw_product.product.name | capitalize }}</td>
                    </tr>
                    <tr>
                      <td class="tw-p-2 tw-whitespace-nowrap">
                        <span class="tw-font-semibold">Volume</span>
                      </td>
                      <td class="tw-p-2 tw-whitespace-nowrap">
                        <template
                          v-if="raw_product.product.quantities.length > 1"
                        >
                          <span
                            >{{ raw_product.product.quantities[0].quantity }}
                            -
                            {{
                              raw_product.product.quantities[
                                raw_product.product.quantities.length - 1
                              ].quantity
                            }}</span
                          >
                        </template>
                        <template v-else>
                          <span>{{
                            raw_product.product.quantities[0].quantity
                          }}</span>
                        </template>
                      </td>
                    </tr>
                    <tr>
                      <td class="tw-p-2 tw-whitespace-nowrap">
                        <span class="tw-font-semibold">Price</span>
                      </td>
                      
                      <td class="tw-p-2 tw-whitespace-nowrap">
                        <div
                          v-for="(qty, index) in raw_product.product.quantities"
                          :key="index"
                        >
                          <span>{{ qty.quantity }} @{{ qty.discount | currency }}</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="tw-p-2 tw-whitespace-nowrap">
                        <span class="tw-font-semibold">Country</span>
                      </td>
                      <td class="tw-p-2 tw-whitespace-nowrap">{{ raw_product.product.country | capitalize }}</td>
                    </tr>
                    <tr>
                      <td class="tw-p-2 tw-whitespace-nowrap">
                        <span class="tw-font-semibold" Content</span>
                      </td>
                      <td class="tw-p-2 tw-whitespace-nowrap">{{ raw_product.product.percentage }}%</td>
                    </tr>
                    <tr>
                      <td class="tw-p-2 tw-whitespace-nowrap">
                        <span class="tw-font-semibold">Brand</span>
                      </td>
                      <td class="tw-p-2 tw-whitespace-nowrap">{{ raw_product.product.brand | capitalize }}</td>
                    </tr>
                    <tr>
                      <td class="tw-p-2 tw-whitespace-nowrap">
                        <span class="tw-font-semibold">Type</span>
                      </td>
                      <td class="tw-p-2 tw-whitespace-nowrap">{{ raw_product.product.category | capitalize }}</td>
                    </tr>
                    <tr>
                      <td class="tw-p-2 tw-whitespace-nowrap">
                        <span class="tw-font-semibold"> Availability</span>
                      </td>
                      <td class="tw-p-2 tw-whitespace-nowrap">
                        <template v-if="raw_product.product.available === true">
                          In Stock
                        </template>
                        <template v-else>
                          Out of stock
                        </template>
                      </td>
                    </tr>
                    <tr>
                      <td class="tw-p-2 tw-whitespace-nowrap">
                        <span class="tw-font-semibold"
                          >Shipment in Nairobi</span
                        >
                      </td>
                      <td class="tw-p-2 tw-whitespace-nowrap">
                        Free*
                      </td>
                    </tr>
                    <tr>
                      <td class="tw-p-2 tw-whitespace-nowrap">
                        <span class="tw-font-semibold">Average Rating</span>
                      </td>
                      <td class="tw-p-2 tw-whitespace-nowrap">
                        <span style="font-size:1.0em" class="d-inline-flex">
                          <template v-if="raw_product.reviews.length > 0">
                            <Rating
                              :max-stars="maxStars"
                              :value="averageStars"
                            ></Rating>
                            <span class="ml-3"
                              ><b>{{ averageStars }}</b> ({{
                                raw_product.reviews.length
                              }}
                              reviews)</span
                            >
                          </template>
                          <template v-else>
                            <Rating :max-stars="maxStars" :value="5"></Rating>
                            &nbsp;5.0 (1 reviews)
                          </template>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
          </div>
        </div>
        <!-- End Product Details -->
        
        <!-- end row -->
        <!-- Subcategories -->
        <div
          class="tw-bg-gray-100 tw-mt-2 tw-mb-3 tw-pt-2 tw-pl-3 tw-pr-2 tw-pb-4 tw-rounded-0"
        >
          <div class="lg:tw-flex tw-gap-2">
            <div
              style="font-size:1.3em;"
              class="tw-text-red-600 tw-font-semibold tw-pb-2"
              >Subcategories
            </div>
            <div
              class="tw-bg-white hover:tw-bg-red-600 hover:tw-text-white
                tw-py-1
                tw-px-2
                tw-w-32
                tw-my-2
                tw-items-center
                tw-rounded-md
                tw-shadow-sm
                tw-text-sm
                tw-leading-4
                tw-font-medium
                tw-text-gray-700
                tw-no-underline"
              v-for="(item, key) in raw_product.product.subcategory"
              :key="key"
              >{{ item.replace(/-/g, ' ') | capitalize }}
            </div>
          </div>
        </div>
        <!-- Tags -->
        <div
          class="tw-bg-gray-100 tw-mt-2 tw-mb-3 tw-pt-2 tw-pl-3 tw-pr-2 tw-pb-4 tw-rounded-0"
        >
          <div
            class="d-inline-block"
            v-if="
              raw_product.product.tags.length && raw_product.product.tags !== ''
            "
          >
            <b
              style="font-size:1.3em;"
              class="tw-text-red-600 tw-font-semibold tw-pb-2"
              >Tags</b
            >
            <a
              class="d-inline tw-bg-white brand-item tw-no-underline tw-p-2 tw-ml-2"
              v-for="(item, key) in raw_product.product.tags"
              :key="`T-${key}`"
              >{{ item.replace(/-/g, ' ') | capitalize }}
            </a>
          </div>
        </div>

        <div class="tw-p-4 tw-mx-auto">
          <!-- video link -->
          <div class="tw-w-full" v-if="raw_product.product.videoLink">
            <lite-youtube
              :videoid="`${raw_product.product.videoLink.split('/')[4]}`"
              playlabel="Avimar International"
              params="controls=0&modestbranding=2&rel=0&enablejsapi=1"
            />
          </div>
        </div>

          <div class="tw-bg-white tw-shadow-lg tw-mt-2 tw-p-4 tw-mx-auto">
            <div class="tw-m-1">
              <h2 class="h2">{{ raw_product.product.name | capitalize }}</h2>
              <div
                class="tw-p-2"
                itemprop="description"
                v-html="productContent"
              ></div>
            </div>
          </div>
        <!-- rating and reviews -->
          <div class="tw-bg-white tw-shadow-lg tw-mt-2 tw-p-4 tw-mx-auto">
            <div class="tw-mt-1">
              <h4>Product Reviews</h4>
              <div>
                <b-alert variant="success" show dismissible v-if="showSuccess">
                  Your review has been submitted successfully!
                </b-alert>
              </div>

              <div>
                <span
                  v-if="showReviewButton"
                  :class="{ 'd-none': showReview, 'btn btn-info': !showReview }"
                  @click="showReview = true"
                  >Write Review</span
                >
                <div v-if="showReview">
                  <hr />
                  <h5>Write a Review</h5>
                  <ValidationObserver v-slot="{ handleSubmit }">
                    <form @submit.prevent="handleSubmit(submitReview)">
                      <label>Rating</label>
                      <Rating :max-stars="maxStars" v-model="rating"></Rating>
                      <div class="row">
                        <div class="col-sm-4">
                          <div class="form-group">
                            <ValidationProvider
                              name="name"
                              rules="required"
                              v-slot="{ errors }"
                            >
                              <label for="username" class="sr-only">Name</label>
                              <input
                                type="text"
                                v-model="defaultData.name"
                                id="username"
                                placeholder="Name"
                                class="form-control"
                              />
                              <small class="text-danger">{{ errors[0] }}</small>
                            </ValidationProvider>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="form-group">
                            <ValidationProvider
                              name="phone"
                              rules="required"
                              v-slot="{ errors }"
                            >
                              <label for="phone" class="sr-only"
                                >Phone No.</label
                              >
                              <input
                                type="text"
                                v-model="defaultData.phone"
                                id="phone"
                                placeholder="Phone Number"
                                class="form-control"
                              />
                              <small class="text-danger">{{ errors[0] }}</small>
                            </ValidationProvider>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="form-group">
                            <ValidationProvider
                              name="email"
                              rules="required|email"
                              v-slot="{ errors }"
                            >
                              <label for="email" class="sr-only">Email</label>
                              <input
                                type="email"
                                v-model="defaultData.email"
                                id="email"
                                placeholder="Email Address"
                                class="form-control"
                              />

                              <small class="text-danger">{{ errors[0] }}</small>
                            </ValidationProvider>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <ValidationProvider
                          name="review"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <label for="review" class="sr-only">Review</label>
                          <textarea
                            v-model="review"
                            class="form-control"
                            id="review"
                            placeholder="Review"
                          >
                          </textarea>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </ValidationProvider>
                      </div>
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </ValidationObserver>
                </div>
                <!-- display reviews -->
                <ul
                  class="tw-mt-3 list-unstyled"
                  v-if="raw_product.reviews.length"
                >
                  <li
                    class="tw-pl-0 tw-pr-5 tw-pt-1 tw-pb-1"
                    v-for="(review, rev) in raw_product.reviews"
                    :key="key - `${rev}`"
                  >
                    <p>
                      <span class="d-inline-flex"
                        ><Rating
                          :max-stars="maxStars"
                          :value="review.stars"
                        ></Rating
                        ><em class="tw-ml-2">{{ review.name }}</em></span
                      >
                      <small class="float-right tw-mr-5">{{
                        review.created_at
                      }}</small>
                    </p>
                    <p>{{ review.review }}</p>
                    <hr />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        <!-- end rating and reviews -->
        <!-- related -->
        <div
          class="tw-mt-5 tw-mb-10 tw-p-4"
          v-if="raw_product.related.length > 0"
        >
          <div class="tw-font-semibold tw-text-2xl tw-mb-2">
            Related products
          </div>
          <div class="">
            <products :products="raw_product.related"></products>
          </div>
        </div>
      </div>
    </section>
    <!-- end section -->
  </div>
</template>
<script>
import Products from '~/components/Products';
import WhatsAppOrder from '~/components/WhatsappOrder';
import Rating from '~/components/Rating';
import { mapGetters, mapState } from 'vuex';
import { vueWindowSizeMixin } from 'vue-window-size';
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate';
import LazyYoutubeVideo from 'vue-lazy-youtube-video'; 

export default {
  mixins: [vueWindowSizeMixin],
  components: {
    Products,
    Rating,
    WhatsAppOrder,
    ValidationProvider,
    ValidationObserver,
    LazyYoutubeVideo,
  },
  data() {
    return {
      quantity: 1,
      showReview: false,
      showReviewButton: true,
      showSuccess: false,
      selectedQuantity: null,
      webShare: false,
      maxStars: 5,
      rating: 5,
      price: {},
      product: {},
      review: null,
      clientReview: [],
      productContent: '',
      defaultData: {},
    };
  },

  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    ...mapState({
      cart: (state) => state.cart.cart,
      favorite: (state) => state.favorite.favorite,
      reviewInfo: (state) => state.reviewInfo,
    }),
    averageStars() {
      if (this.raw_product.reviews.length > 0) {
        let total_reviews = this.raw_product.reviews.length;
        let total_stars = this.raw_product.reviews.reduce(
          (acc, item) => acc + item.stars,
          0
        );
        return parseFloat(total_stars / total_reviews).toFixed(1);
      } else {
        return 5;
      }
    },
    total() {
      return this.quantity * this.price.discount;
    },
  },
  mounted() {
    this.loadProduct();
    this.getClientReview();
    this.getProductContent();
    this.defaultFormValues();
  },
  async asyncData({ params, $http }) {
    try {
      const raw_product = await $http
        .$get(`products/slug/${params.url}`)
        .then((response) => response.result)
        .catch((err) => {
          console.log(err);
        });

      return { raw_product };
    } catch (err) {
      return { raw_product: [] };
    }
  },
  methods: {
    loadProduct() {
      if (
        this.raw_product.product &&
        this.raw_product.product !== 'undefined'
      ) {
        this.product = this.raw_product.product;
        this.price = this.raw_product.product.quantities[0];
      } else {
        this.$router.push('/');
      }
    },
    defaultFormValues() {
      if (this.isAuthenticated) {
        this.defaultData = {
          email: this.loggedInUser.email,
          phone: this.loggedInUser.phone,
          name: this.loggedInUser.name,
        };
      } else if (
        !this.isAuthenticated &&
        Object.keys(this.reviewInfo).length !== 0
      ) {
        this.defaultData = {
          email: this.reviewInfo.email,
          phone: this.reviewInfo.phone,
          name: this.reviewInfo.name,
        };
      } else {
        this.defaultData = {
          email: null,
          phone: null,
          name: null,
        };
      }
    },
    async getProductContent() {
      let products;
      if (this.product.brand && this.product.brand !== 'undefined') {
        products = this.raw_product.families;
      } else {
        products = null;
      }
      const inThisFamily = () => {
        if (products && products.length > 0) {
          const families = products
            .map((item) => {
              return `<i class="text-capitalize">${item.name}</i>`;
            })
            .join(', ');
          return `Other ${this.product.category}s in this family include ${families}.`;
        }
        return '';
      };
      const _related = () => {
        let rel = this.raw_product.related
          .map((prod) => {
            return `<a href="/product/${prod.url}" class="text-capitalize">${prod.name}</a>`;
          })
          .join(', ');
        return ` We also stock other  <a href="/${this.raw_product.category.url}">${this.product.category} brands in Kenya </a> such as ${rel}.
            Visit our  ${this.product.category} shop to explore
            our extensive library`;
      };
      const inStock = this.product.available
        ? 'in stock and you can order it now'
        : 'out of stock';
      const quantities = [...this.product.quantities] || [];
      const sizes = quantities
        .map((item) => {
          return `${item.quantity} which cost Ksh ${item.discount}`;
        })
        .join(', ');
      this.productContent = ` <span class="text-capitalize">${
        this.product.name
      }</span> is a <b class="text-capitalize"><a href="/${
        this.raw_product.category.url
      }"> ${
        this.product.category
      }</a></b> that belongs to <a href="/brands/${this.raw_product.brand.url ||
        this.product.brand}">${
        this.product.brand
      }</a>  family. It is classified as
      <a href="/${this.raw_product.category.url}/${
        this.product.subcategory[0]
      }">${this.product.subcategory[0]}</a>
      }</b>. This ${
        this.product.category
      } comes in ${sizes} Kg. ${inThisFamily()} This product is currently ${inStock}. Enjoy <b>free delivery</b> and <a href="/">${
        this.product.name
      } best prices in Kenya</a>.

<p>Buy ${this.product.name} at the best ${
        this.product.name
      } price in Kenya. ${_related()}</p>

<b>Avimar International</b> offers flexible payment methods :
<ul>
    <li> Mpesa (send money - +254731722682)</li>
    <li> VISA card</li>
    <li>  MASTER card</li>
    <li>  CASH</li>
    <li>  PayPal</li>
    <li> Online payment</li>
    </ul>
To order <b>genuine products</b> online in Kenya call, sms, WhatsApp 0731722682. For a great experience, download our Mobile App to keep posted on our offers. <b>Avimar International</b> being a ${
        this.product.category
      } enthusiast offers updates, information and fun facts via our blog. Follow us on <a href="https://www.facebook.com/avimar/" target="_blank"
                     >facebook</a>, <a href="https://www.twitter.com/avimar/" target="_blank"
                     >twitter</a> and on <a href="https://instagram.com/avimar/" target="_blank"
                     >instagram</a> for updates and to check for offers.
                     <p>
                     ${this.product.description}
                     </p>`;
    },
    async getClientReview() {
      if (this.isAuthenticated) {
        await this.$http
          .$get(`ratings/client-product-review/${this.product._id}`)
          .then((response) => {
            this.clientReview = response.result;
          })
          .catch((error) => {
            console.log(error.response);
          });
      } else {
        this.clientReview = [];
      }
    },
    async submitReview() {
      const data = {
        stars: this.rating,
        review: this.review,
        productId: this.product._id,
        product: this.product,
        name: this.defaultData.name,
        email: this.defaultData.email,
        phone: this.defaultData.phone,
        status: 0,
      };
      const infoData = {
        name: this.defaultData.name,
        email: this.defaultData.email,
        phone: this.defaultData.phone,
      };

      if (!this.isAuthenticated) {
        this.$store.commit('setReviewInfo', infoData);
      }

      await this.$http
        .$post('ratings/create', JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        })
        .then((response) => {
          console.log(response);
          this.$toast.success('Review Submitted');
          this.review = null;
          this.showReview = false;
          this.showReviewButton = false;
          this.showSuccess = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changedItem: function(event) {
      console.log(event);
    },
    whatsAppInfo(product) {
      let kivy = product.quantities[0];
      this.activeProduct = product;
      this.price = kivy;
    },
    // Add to wish list
    wishList(product) {
      let found = this.favorite.find((record) => record._id === product._id);
      if (found) {
        this.$store.commit('favorite/removeFromFavorite', product);
      } else {
        this.$store.commit('favorite/addToFavorite', product);
        this.$toast.success('Added to favorites');
      }
    },
    // Add to cart
    addToCart(product) {
      this.item = {
        productName: product.name,
        productImage: product.image,
        productImageUrl: product.image_url,
        productId: product._id,
        productQuantity: this.quantity,
        productUnit: this.price.quantity,
        productType: product.category,
        price: this.price.discount,
        subTotal: this.price.discount * this.quantity,
      };
      let found = this.cart.find(
        (record) => record.productId === this.item.productId
      );
      if (found) {
        return false;
        // this.$toast.info('Item already in cart');
      } else if (this.item.productQuantity < 1) {
        this.$toast.warning('Quantity must be equal or greater than 1');
      } else {
        this.$store.commit('cart/addToCart', this.item);
        this.$toast.success('Added to cart');
      }
    },
    share() {
      if (navigator.share !== undefined) {
        navigator
          .share({
            title: `${this.product.name}`,
            text: `Check out ${this.product.name} from Avimar International`,
            url: `https://avimar.online/product/${this.product.url}`,
          })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log(error));
      } else {
        console.log('Cannot share');
      }
    },
  },

  head() {
    const product = this.raw_product.product || {};
    const name = product.name[0].toUpperCase() + product.name.substring(1);
    const subcat = product.subcategory[0]
      ? `Explore more ${product.subcategory[0]
          .split('-')
          .join(' ')}s brands in our online store & get free drink delivery`
      : `Get more ${product.category} brands in Kenya from our online store & enjoy free drink delivery`;
    const quantities = product.quantities
      .map((prod) => {
        return prod.quantity;
      })
      .join(' or ');
    const title = `${name} ${product.category} best price in Kenya - Buy online | Free delivery`;
    const image = product.image_url;
    const desc = `Buy ${name} ${product.category} online in Kenya - Available in ${quantities}. Order ${product.category} brands at the best prices & pay on delivery. Enjoy Free & fast delivery `;
    return {
      title: title,
      meta: [
        { hid: 'title', name: 'title', content: title },
        { hid: 'description', name: 'description', content: desc },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:description', name: 'og:description', content: desc },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://avimar.online/product/${product.url}`,
        },
        { hid: 'og:image', name: 'og:image', content: image },
        { hid: 'og:site_name', name: 'og:site_name', content: 'nairobidrinks' },

        { hid: 'twitter:card', name: 'twitter:card', content: name },
        { hid: 'twitter:site', name: 'twitter:site', content: '@nairobidrinks' },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: desc },
        { hid: 'twitter:image', name: 'twitter:image', content: image },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://avimar.online' + this.$route.path,
        },
      ],
    };
  },
};
</script>
<style>
.modal-open .modal,
.btn:focus,
.modal-btn:focus,
.modal-btn,
.btn {
  outline: none;
}
.modal-backdrop {
  opacity: 0.3 !important;
}

.small_headers {
  height: 40px;
  background-color: #eceff1;
  padding-left: 6px;
}

.small_headers p {
  line-height: 40px;
  font-weight: 600;
}

.h1 {
  font-size: 1.4em;
  font-weight: 600;
}

.h2 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 15px;
}
.product-quantity {
  min-height: 180px;
}
.product-table {
  min-height: 380px;
}
@media screen and (max-width: 481px) {
  #breadcrumb {
    overflow: hidden;
    visibility: hidden;
  }
  .product-quantity {
    min-height: 200px;
  }
  .product-table {
    min-height: 400px;
  }
}
</style>
